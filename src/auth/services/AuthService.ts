import { UserMap } from "../models/map/UserMap"
import { AuthRepository } from "../repositories/AuthRepository"

export const AuthService = {

  async login(email: string, password: string) {
		const auth = await AuthRepository.login(email, password) as any
    auth.user = UserMap.toDto(auth.user)
		return auth
	}
}