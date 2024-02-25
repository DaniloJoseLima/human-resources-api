import { AppDataSource } from '../../data-source'
import { User } from '../../shared/entities/User'

export const AuthDataSource = AppDataSource.getRepository(User)
