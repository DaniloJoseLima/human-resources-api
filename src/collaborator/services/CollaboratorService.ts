import { CollaboratorDependentsDto } from './../models/dto/CollaboratorDependentsDto';
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
import { CollaboratorDependentMap } from '../models/map/CollaboratorDependentMap';
import { CollaboratorDependents } from '../../shared/entities/CollaboratorDependents';
import { CollaboratorDependentsRepository } from '../repositories/CollaboratorDependentsRepository';

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

  async saveDocuments(dto: CollaboratorDto) {
    if (dto.document) {
      const collaboratorDocument = dto.document.map((entity) => {
        const collaboratorDocuments = CollaboratorDocumentMap.toEntity(entity)
        return collaboratorDocuments
      }) as CollaboratorDocuments[]

      this.deleteDocuments(dto)
      const collaborator = await CollaboratorDocumentRepository.save(collaboratorDocument)
      return collaborator
    }
    return null
  },

  async updateDocuments(dto: CollaboratorDto) {
    if (dto.document) {
      const entity = dto.document.map((data) => {
        const collaboratorDocuments = CollaboratorDocumentMap.toEntity(data)
        return collaboratorDocuments
      }) as CollaboratorDocuments[]

      this.deleteDocuments(dto)
      entity.map( async (data) => {
        await CollaboratorDocumentRepository.update(data)
      })
      return entity
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
      if(collaboratorDto.document && collaboratorDto.document.length > 0) {
        const validContact = collaboratorDto.document.find( c => c.id == documents[index].id) 
        if(!validContact) {
          CollaboratorDocumentRepository.delete(documents[index].id)
        }
      } else {
        CollaboratorDocumentRepository.delete(documents[index].id)
      }
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

  async updateContacts(collaboratorDto: CollaboratorDto) {
    if (collaboratorDto.contacts) {
      const entity = collaboratorDto.contacts.map((data) => {
        const collaboratorContacts = CollaboratorContactMap.toEntity(data)
        return collaboratorContacts
      }) as CollaboratorContacts[]

      this.deleteContacts(collaboratorDto)
      entity.map( async (data) => {
        await CollaboratorContactsRepository.update(data)
      })
      return entity
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
      if(collaboratorDto.contacts && collaboratorDto.contacts.length > 0) {
        const validContact = collaboratorDto.contacts.find( c => c.id == contacts[index].id) 
        if(!validContact) {
          CollaboratorContactsRepository.delete(contacts[index].id)
        }
      } else {
        CollaboratorContactsRepository.delete(contacts[index].id)
      }
    }
  },

  async saveAddress(collaboratorAddressDto: CollaboratorAddressDto) {
    if (collaboratorAddressDto) {
      const entity = CollaboratorAddressMap.toEntity(collaboratorAddressDto)
      const collaborator = await CollaboratorAddressRepository.save(entity)
      return collaborator
    }
    throw new BadRequestError('invalid form')
  },

  async updateAddress(collaboratorAddressDto: CollaboratorAddressDto) {
    const entity = CollaboratorAddressMap.toEntity(collaboratorAddressDto)
    const collaborator = await CollaboratorAddressRepository.update(entity)
    return collaborator
  },

  async findAddress(collaboratorId: string) {
    const contacts = await CollaboratorAddressRepository.find(collaboratorId)
    return contacts
  },

  async saveDependents(dto: CollaboratorDependentsDto[]) {
    if (dto) {
      let collaboratorDtoId = dto[0].collaboratorId
      const entity = dto.map((data) => {
        const collaboratorContacts = CollaboratorDependentMap.toEntity(data)
        return collaboratorContacts
      }) as CollaboratorDependents[]

      this.deleteDependents(collaboratorDtoId)
      const collaborator = await CollaboratorDependentsRepository.save(entity)
      return collaborator
    }
    return null
  },

  async updateDependents(dto: CollaboratorDependentsDto[]) {
    if (dto) {
      let collaboratorDtoId = dto[0].collaboratorId
      const entity = dto.map((data) => {
        const collaboratorContacts = CollaboratorDependentMap.toEntity(data)
        return collaboratorContacts
      }) as CollaboratorDependents[]

      entity.map(async (value) => {
        await CollaboratorDependentsRepository.update(value)
      })
      return this.findDependents(collaboratorDtoId)
    }
    return null
  },

  async findDependents(collaboratorId: string) {
    const entity = await CollaboratorDependentsRepository.find(collaboratorId)
    return entity
  },

  async deleteDependents(id: string) {
    const dependents = await this.findDependents(id)
    for (let index = 0; index < dependents.length; index++) {
      CollaboratorDependentsRepository.delete(dependents[index].id)
    }
  },
}