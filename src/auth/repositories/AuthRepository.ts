import { User } from './../../shared/entities/User';
import { UserDto } from './../models/dto/UserDto';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '../../shared/helpers/api-erros';

import { AuthDataSource } from '../dataSource/AuthDataSource';
import { findById } from './queries/user';

export const AuthRepository = {

  async login(user: UserDto) {

    const [data] = await Promise.all([await AuthDataSource.query(findById(user.email))])
    let userValue = data[0]

    if (!userValue && !user.isGoogle) {
      throw new BadRequestError('account not exist')
    }

    if (!userValue && user.isGoogle) {
      userValue = await this.create(user.name, user.email, 'passwordGoogle')
      return await this.autoLogin(userValue)
    } else if (userValue && user.isGoogle) {
      return await this.autoLogin(userValue)
    }

    if(user.password) {
      const verifyPass = await bcrypt.compare(user.password, userValue.password)
      
      if (!verifyPass) {
        throw new BadRequestError('invalid password')
      }
    }

    const token = jwt.sign({ id: userValue.id }, process.env.JWT_PASS ?? '', {
      expiresIn: '8h',
    })

    const { password: _, ...userLogin } = userValue

    return { user: userLogin, token }
  },

  async create(name: string, email: string, password: string) {
    const userExists = await AuthDataSource.findOneBy({ email })
    if (userExists) {
      throw new BadRequestError('Email already exists')
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = AuthDataSource.create({
      roleId: 1,
      name,
      email,
      password: hashPassword,
    })
    await AuthDataSource.save(newUser)
    const { password: _, ...user } = newUser
    return user
  },

  async autoLogin(user: User) {
    const [data] = await Promise.all([await AuthDataSource.query(findById(user.email))])
    let userValue = data[0]
    
    const token = jwt.sign({ id: userValue.id }, process.env.JWT_PASS ?? '', {
      expiresIn: '8h',
    })

    const { password: _, ...userLogin } = userValue

    return { user: userLogin, token }

  }

}