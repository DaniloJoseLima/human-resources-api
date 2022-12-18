import bcrypt from 'bcrypt'
import { BadRequestError } from '../../shared/helpers/api-erros'

import { UserDataSource } from "../dataSource/userDataSource"

export const UserRepository = {

  async create(name: string, email: string, password: string) {

    const userExists = await UserDataSource.findOneBy({ email })

    if (userExists) {
      throw new BadRequestError('E-mail já existe')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = UserDataSource.create({
      name,
      email,
      password: hashPassword,
    })

    await UserDataSource.save(newUser)

    const { password: _, ...user } = newUser

    return user
  },

  async findById(id: string) {
    const user = await UserDataSource.findOneBy({ id })
    return user;
  }

}