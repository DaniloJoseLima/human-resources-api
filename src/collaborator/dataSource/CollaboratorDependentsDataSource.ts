import { AppDataSource } from '../../data-source'
import { CollaboratorDependents } from '../../shared/entities/CollaboratorDependents'

export const CollaboratorDependentsDataSource = AppDataSource.getRepository(CollaboratorDependents)
