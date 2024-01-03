import { CollaboratorAddressDto } from './../models/dto/CollaboratorAddressDto';
import { CollaboratorDocumentDto } from './../models/dto/CollaboratorDocumentDto';

import { Collaborator } from '../../shared/entities/Collaborator';
import { CollaboratorDto } from '../models/dto/CollaboratorDto';
import { CollaboratorMap } from '../models/map/CollaboratorMap';
import { CollaboratorRepository } from '../repositories/CollaboratorRepository';
import { CollaboratorDocumentMap } from '../models/map/CollaboratorDocumentMap';
import { CollaboratorDocumentRepository } from '../repositories/CollaboratorDocumentRepository';
import { CollaboratorDocuments } from '../../shared/entities/CollaboratorDocuments';
import { CollaboratorContactMap } from '../models/map/CollaboratorContactMap';
import { CollaboratorContacts } from '../../shared/entities/CollaboratorContacts';
import { CollaboratorContactsRepository } from '../repositories/CollaboratorContactsRepository';
import { CollaboratorAddressMap } from '../models/map/CollaboratorAddressMap';
import { CollaboratorAddressRepository } from '../repositories/CollaboratorAddressRepository';
import { BadRequestError } from '../../shared/helpers/api-erros';

export const CollaboratorService = {

  async save(collaboratorDto: CollaboratorDto) {
    const entity = CollaboratorMap.toEntity(collaboratorDto)
    const collaborator = await CollaboratorRepository.save(entity)
    return collaborator
  },

  async update(collaboratorDto: CollaboratorDto) {
    const entity = CollaboratorMap.toEntity(collaboratorDto)
    const collaborator = await CollaboratorRepository.update(entity)
    return collaborator
  },

  async list(field: string, q: string, pageNumber: number) {
    let data = await CollaboratorRepository.list(field, q, pageNumber)
    data.list = data.list.map((entity: any) => {
      return CollaboratorMap.toDto(entity)
    })
    return data
  },

  async find(id: string) {
    const data = await CollaboratorRepository.find(id) as any
    const dto = CollaboratorMap.toDto(data)
    return dto
  },

  async registrationVerification(id: string) {
    const data = await CollaboratorRepository.registrationVerification(id) as any
    return data
  },

  async saveDocuments(collaboratorDto: CollaboratorDto) {
    if (collaboratorDto.document) {
      const collaboratorDocument = collaboratorDto.document.map((entity) => {
        const collaboratorDocuments = CollaboratorDocumentMap.toEntity(entity)
        return collaboratorDocuments
      }) as CollaboratorDocuments[]

      this.deleteDocuments(collaboratorDto)
      const collaborator = await CollaboratorDocumentRepository.save(collaboratorDocument)
      return collaborator
    }
    return null
  },

  async findDocuments(collaboratorId: string) {
    const documents = await CollaboratorDocumentRepository.find(collaboratorId)
    return documents
  },

  async deleteDocuments(collaboratorDto: CollaboratorDto) {
    const documents = await this.findDocuments(collaboratorDto.id)
    for (let index = 0; index < documents.length; index++) {
      CollaboratorDocumentRepository.delete(documents[index].id)
    }
  },

  async saveContacts(collaboratorDto: CollaboratorDto) {
    if (collaboratorDto.contacts) {
      const collaboratorContact = collaboratorDto.contacts.map((entity) => {
        const collaboratorContacts = CollaboratorContactMap.toEntity(entity)
        return collaboratorContacts
      }) as CollaboratorContacts[]

      this.deleteContacts(collaboratorDto)
      const collaborator = await CollaboratorContactsRepository.save(collaboratorContact)
      return collaborator
    }
    return null
  },

  async findContacts(collaboratorId: string) {
    const contacts = await CollaboratorContactsRepository.find(collaboratorId)
    return contacts
  },

  async deleteContacts(collaboratorDto: CollaboratorDto) {
    const contacts = await this.findContacts(collaboratorDto.id)
    for (let index = 0; index < contacts.length; index++) {
      CollaboratorDocumentRepository.delete(contacts[index].id)
    }
  },

  async saveAddress(collaboratorAddressDto: CollaboratorAddressDto) {
    if (collaboratorAddressDto) {
      const collaboratorAddress = CollaboratorAddressMap.toEntity(collaboratorAddressDto)
      const collaborator = await CollaboratorAddressRepository.save(collaboratorAddress)
      return collaborator
    }
    throw new BadRequestError('invalid form')
  },

  async findAddress(collaboratorId: string) {
    const contacts = await CollaboratorAddressRepository.find(collaboratorId)
    return contacts
  },
}