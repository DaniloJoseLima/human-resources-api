import { AppDataSource } from '../../data-source'
import { CollaboratorContacts } from '../../shared/entities/CollaboratorContacts'

export const CollaboratorContactsDataSource = AppDataSource.getRepository(CollaboratorContacts)
