import { AppDataSource } from '../../data-source'
import { CollaboratorBankData } from '../../shared/entities/CollaboratorBankData'

export const CollaboratorBankDataSource = AppDataSource.getRepository(CollaboratorBankData)
