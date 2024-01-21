import { AppDataSource } from '../../data-source'
import { CollaboratorTransportCardTypes } from '../../shared/entities/CollaboratorTransportCardTypes'

export const CollaboratorTransportCardTypesDataSource = AppDataSource.getRepository(CollaboratorTransportCardTypes)
