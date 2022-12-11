import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { BadRequestError } from '../../shared/helpers/api-erros';
import { AuthRepository } from "../repositories/AuthRepository"

export const AuthService = {

  async login(email: string, password: string) {

		const user = await AuthRepository.findOneBy({ email })

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