
import { UserRepository } from '../repositories/userRepository';

export const UserService = {

  async create(name: string, email: string, password: string) {
		const user = await UserRepository.create(name, email, password)
		return user
	},
}