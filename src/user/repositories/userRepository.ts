import { User } from './../../shared/entities/User';
import bcrypt from 'bcrypt'
import { BadRequestError } from '../../shared/helpers/api-erros'

import { UserDataSource } from "../dataSource/userDataSource"
import { findById, listAll, listAllCount } from './queries/user'

export const UserRepository = {

  async create(name: string, email: string, password: string) {

    const userExists = await UserDataSource.findOneBy({ email })

    if (userExists) {
      throw new BadRequestError('Email already exists')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = UserDataSource.create({
      roleId: 1,
      name,
      email,
      password: hashPassword,
    })

    await UserDataSource.save(newUser)

    const { password: _, ...user } = newUser

    return user
  },

  async update(user: User) {
    
    let userExists = await UserDataSource.findOneBy({ id: user.id }) as User
    if (!userExists) {
      throw new BadRequestError('User already exists')
    }

    userExists = {
      ...userExists,
      name: user.name,
      email: user.email,
      roleId: user.roleId
    }

    await UserDataSource.save(userExists)
    return user
  },

  async findAll(field: string, q: string, pageNumber: number) {
    const limitRegisters = 10;
    const [list, count] = await Promise.all([
      UserDataSource.query(listAll(field, q, pageNumber, limitRegisters)),
      UserDataSource.query(listAllCount(field, q, pageNumber, limitRegisters))
    ])
    const { totalRegisters } = count[0]
    const pages = Math.ceil(totalRegisters / limitRegisters)
    return { totalRegisters, pages, list }
  },

  async find(id: string) {
    const [user] = await Promise.all([await UserDataSource.query(findById(id))])
    return user[0];
  },

}