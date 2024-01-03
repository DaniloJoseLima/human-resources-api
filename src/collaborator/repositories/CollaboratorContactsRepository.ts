import { CollaboratorContacts } from './../../shared/entities/CollaboratorContacts';
import { BadRequestError } from '../../shared/helpers/api-erros'

import { CollaboratorContactsDataSource } from '../dataSource/CollaboratorContactsDataSource';

export const CollaboratorContactsRepository = {

  async save(collaboratorContacts: CollaboratorContacts[]) {
    try {
      const collaborator = CollaboratorContactsDataSource.create(collaboratorContacts)
      await CollaboratorContactsDataSource.save(collaborator)
      return collaborator
    } catch (error) {
      throw new BadRequestError('Error contacts list')
    }
  },

  async find(collaboratorId: string) {
    let collaboratorContacts = await CollaboratorContactsDataSource.find({
      where: {
        collaboratorId: collaboratorId
      }
    }) as CollaboratorContacts[]

    return collaboratorContacts
  },
  
  async delete(collaboratorContactId: number) {
    const value = await CollaboratorContactsDataSource.delete(collaboratorContactId)
    return value
  }

}