import { AppDataSource } from '../../data-source'
import { CollaboratorCompanyData } from '../../shared/entities/CollaboratorCompanyData'

export const CollaboratorCompanyDataSource = AppDataSource.getRepository(CollaboratorCompanyData)
