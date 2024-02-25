import { AppDataSource } from '../../data-source'
import { CollaboratorTransport } from '../../shared/entities/CollaboratorTransport'

export const CollaboratorTransportDataSource = AppDataSource.getRepository(CollaboratorTransport)
