import { AppDataSource } from '../../data-source'
import { CollaboratorContractData } from '../../shared/entities/CollaboratorContractData'

export const CollaboratorContractDataSource = AppDataSource.getRepository(CollaboratorContractData)
