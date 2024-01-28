import { UserDto } from './../models/dto/UserDto';
import { UserMap } from "../models/map/UserMap"
import { AuthRepository } from "../repositories/AuthRepository"

export const AuthService = {

  async login(user: UserDto) {
		const auth = await AuthRepository.login(user) as any
    auth.user = UserMap.toDto(auth.user)
		return auth
	}
}