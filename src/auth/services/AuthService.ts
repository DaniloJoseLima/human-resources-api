import { AuthRepository } from "../repositories/AuthRepository"

export const AuthService = {

  async login(email: string, password: string) {
		const user = await AuthRepository.login(email, password)
		return user
	}
}