import { AppDataSource } from '../../data-source'
import { User } from '../../shared/entities/User'

export const UserDataSource = AppDataSource.getRepository(User)
