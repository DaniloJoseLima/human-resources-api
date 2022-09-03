import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { BadRequestError } from './../../helpers/api-erros';
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

  async login(email: string, password: string) {

		const user = await userRepository.findOneBy({ email })

		if (!user) {
			throw new BadRequestError('account not exist')
		}

		const verifyPass = await bcrypt.compare(password, user.password)

		if (!verifyPass) {
			throw new BadRequestError('invalid password')
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
			expiresIn: '8h',
		})

		const { password: _, ...userLogin } = user

		return {user: userLogin, token}
	}
}