import { AppDataSource } from '../../data-source'
import { User } from '../../shared/entities/User'

export const AuthRepository = AppDataSource.getRepository(User)
