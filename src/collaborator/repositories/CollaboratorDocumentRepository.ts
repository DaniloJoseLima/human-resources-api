import { CollaboratorDocuments } from './../../shared/entities/CollaboratorDocuments';
import { BadRequestError } from '../../shared/helpers/api-erros'

import { CollaboratorDocumentDataSource } from "../dataSource/CollaboratorDataSource"
import { CollaboratorDocumentDto } from '../models/dto/CollaboratorDocumentDto';

export const CollaboratorDocumentRepository = {

  async save(collaboratorDocumentDto: CollaboratorDocuments[]) {
    try {
      const collaborator = CollaboratorDocumentDataSource.create(collaboratorDocumentDto)
      await CollaboratorDocumentDataSource.save(collaborator)
      return collaborator
    } catch (error) {
      throw new BadRequestError('Error documents list')
    }
  },

  async find(collaboratorId: string) {
    let collaboratorDocuments = await CollaboratorDocumentDataSource.find({
      where: {
        collaboratorId: collaboratorId
      }
    }) as CollaboratorDocuments[]

    return collaboratorDocuments
  },
  
  async delete(collaboratorDocumentId: number) {
    const value = await CollaboratorDocumentDataSource.delete(collaboratorDocumentId)
    return value
  }

}