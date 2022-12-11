import bcrypt from 'bcrypt'

import { BadRequestError } from '../../shared/helpers/api-erros';
import { userRepository } from "../repositories/userRepository"

export const UserService = {

  async create(name: string, email: string, password: string) {

		const userExists = await userRepository.findOneBy({ email })

		if (userExists) {
			throw new BadRequestError('E-mail já existe')
		}

		const hashPassword = await bcrypt.hash(password, 10)

		const newUser = userRepository.create({
			name,
			email,
			password: hashPassword,
		})

		await userRepository.save(newUser)
    
		const { password: _, ...user } = newUser

		return user
	},
}