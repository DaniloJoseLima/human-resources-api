import { AppDataSource } from '../../data-source'
import { User } from '../../shared/entities/User'

export const userRepository = AppDataSource.getRepository(User)
