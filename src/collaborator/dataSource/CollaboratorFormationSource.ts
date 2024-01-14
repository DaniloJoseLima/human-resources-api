import { AppDataSource } from '../../data-source'
import { CollaboratorFormation } from '../../shared/entities/CollaboratorFormation'

export const CollaboratorFormationSource = AppDataSource.getRepository(CollaboratorFormation)
