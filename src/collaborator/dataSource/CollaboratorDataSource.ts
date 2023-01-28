import { AppDataSource } from '../../data-source'
import { Collaborator } from '../../shared/entities/Collaborator'

export const CollaboratorDataSource = AppDataSource.getRepository(Collaborator)
