import { AppDataSource } from '../../data-source'
import { Collaborator } from '../../shared/entities/Collaborator'
import { CollaboratorDocuments } from '../../shared/entities/CollaboratorDocuments'

export const CollaboratorDataSource = AppDataSource.getRepository(Collaborator)
export const CollaboratorDocumentDataSource = AppDataSource.getRepository(CollaboratorDocuments)
