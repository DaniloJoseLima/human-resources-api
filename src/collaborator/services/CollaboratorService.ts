import { CollaboratorProfessionalDataDto } from './../models/dto/CollaboratorProfessionalDataDto';
import { CollaboratorContractDataDto } from './../models/dto/CollaboratorContractDataDto';
import { CollaboratorBankDataDto } from './../models/dto/CollaboratorBankDataDto';
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
import { CollaboratorBankDataMap } from '../models/map/CollaboratorBankDataMap';
import { CollaboratorBankData } from '../../shared/entities/CollaboratorBankData';
import { CollaboratorBankDataRepository } from '../repositories/CollaboratorBankDataRepository';
import { CollaboratorContractDataMap } from '../models/map/CollaboratorContractDataMap';
import { CollaboratorContractData } from '../../shared/entities/CollaboratorContractData';
import { CollaboratorContractDataRepository } from '../repositories/CollaboratorContractDataRepository';
import { CollaboratorFormationMap } from '../models/map/CollaboratorFormationMap';
import { CollaboratorFormation } from '../../shared/entities/CollaboratorFormation';
import { CollaboratorAcademicFormation } from '../../shared/entities/CollaboratorAcademicFormation';
import { CollaboratorCertification } from '../../shared/entities/CollaboratorCertification';
import { CollaboratorFormationRepository } from '../repositories/CollaboratorFormationRepository';
import { CollaboratorAcademicFormationRepository } from '../repositories/CollaboratorAcademicFormationRepository';
import { CollaboratorCertificationRepository } from '../repositories/CollaboratorCertificationRepository';
import { CollaboratorProfessionalDataMap } from '../models/map/CollaboratorProfessionalDataMap';

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
      entity.map(async (data) => {
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
      if (collaboratorDto.document && collaboratorDto.document.length > 0) {
        const validContact = collaboratorDto.document.find(c => c.id == documents[index].id)
        if (!validContact) {
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
      entity.map(async (data) => {
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
      if (collaboratorDto.contacts && collaboratorDto.contacts.length > 0) {
        const validContact = collaboratorDto.contacts.find(c => c.id == contacts[index].id)
        if (!validContact) {
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

  async saveBanckData(dto: CollaboratorBankDataDto) {
    const entity = CollaboratorBankDataMap.toEntity(dto) as CollaboratorBankData
    const collaborator = await CollaboratorBankDataRepository.save(entity)
    return collaborator
  },

  async updateBanckData(dto: CollaboratorBankDataDto) {
    const entity = CollaboratorBankDataMap.toEntity(dto) as CollaboratorBankData
    const collaborator = await CollaboratorBankDataRepository.update(entity)
    return collaborator
  },

  async findBanckData(collaboratorId: string) {
    const entity = await CollaboratorBankDataRepository.find(collaboratorId)
    return entity
  },

  async saveContractData(dto: CollaboratorContractDataDto) {
    const entity = CollaboratorContractDataMap.toEntity(dto) as CollaboratorContractData
    const collaborator = await CollaboratorContractDataRepository.save(entity)
    return collaborator
  },

  async updateContractData(dto: CollaboratorContractDataDto) {
    const entity = CollaboratorContractDataMap.toEntity(dto) as CollaboratorContractData
    const collaborator = await CollaboratorContractDataRepository.update(entity)
    return collaborator
  },

  async findContractData(collaboratorId: string) {
    const entity = await CollaboratorContractDataRepository.find(collaboratorId)
    return entity
  },

  async saveProfessionalData(dto: CollaboratorProfessionalDataDto) {
    const entityFormation = CollaboratorFormationMap.toEntity(dto) as CollaboratorFormation
    const formation = await CollaboratorFormationRepository.save(entityFormation)

    const entityAcademicFormation = dto.formation as CollaboratorAcademicFormation[]
    this.deleteAcademicFormation(entityAcademicFormation, dto.collaboratorId)
    const academicFormation = await CollaboratorAcademicFormationRepository.save(entityAcademicFormation)

    const entityCertification = dto.certification as CollaboratorCertification[]
    this.deleteCertification(entityCertification, dto.collaboratorId)
    const certification = await CollaboratorCertificationRepository.save(entityCertification)

    const professionalDataDto = CollaboratorProfessionalDataMap.toDto(formation, academicFormation, certification) as CollaboratorProfessionalDataDto

    return professionalDataDto
  },

  async updateProfessionalData(dto: CollaboratorProfessionalDataDto) {

    const entityFormation = CollaboratorFormationMap.toEntity(dto) as CollaboratorFormation
    const formation = await CollaboratorFormationRepository.update(entityFormation)
    if (dto.formation) {
      const entityAcademicFormation = dto.formation as CollaboratorAcademicFormation[]
      await this.deleteAcademicFormation(entityAcademicFormation, dto.collaboratorId)
      entityAcademicFormation.map(async (data) => {
        if(data.id) {
          await CollaboratorAcademicFormationRepository.update(data)
        } else {
          await CollaboratorAcademicFormationRepository.save([data])
        }
      })
    }
    if (dto.certification) {
      const entityCertification = dto.certification as CollaboratorCertification[]
      this.deleteCertification(entityCertification, dto.collaboratorId)
      entityCertification.map(async (data) => {
        if(data.id) {
          await CollaboratorCertificationRepository.update(data)
        } else {
          await CollaboratorCertificationRepository.save([data])
        }
      })
    }
    return dto
  },

  async deleteAcademicFormation(entity: CollaboratorAcademicFormation[], collaboratorId: string) {
    const list = await this.findAcademicFormation(collaboratorId)
    for (let index = 0; index < list.length; index++) {
      if (entity && entity.length > 0) {
        const validFormation = entity.find(f => f.id == list[index].id)
        if (!validFormation) {
          CollaboratorAcademicFormationRepository.delete(list[index].id)
        }
      } else {
        CollaboratorAcademicFormationRepository.delete(list[index].id)
      }
    }
    return true
  },

  async deleteCertification(entity: CollaboratorCertification[], collaboratorId: string) {
    const list = await this.findCertification(collaboratorId) as CollaboratorCertification[]
    for (let index = 0; index < list.length; index++) {
      if (entity && entity.length > 0) {
        const verifyItems = entity.find(e => e.id == list[index].id)
        if (!verifyItems) {
          CollaboratorCertificationRepository.delete(list[index].id)
        }
      } else {
        CollaboratorCertificationRepository.delete(list[index].id)
      }
    }
  },

  async findProfessionalData(collaboratorId: string): Promise<CollaboratorProfessionalDataDto> {
    const formation = await CollaboratorFormationRepository.findByCollaboratorId(collaboratorId) as CollaboratorFormation
    const academicFormation = await CollaboratorAcademicFormationRepository.findByCollaboratorId(collaboratorId) as CollaboratorAcademicFormation[]
    const certification = await CollaboratorCertificationRepository.findByCollaboratorId(collaboratorId) as CollaboratorCertification[]    

    const professionalDataDto = CollaboratorProfessionalDataMap.toDto(formation, academicFormation, certification) as CollaboratorProfessionalDataDto
    return professionalDataDto
  },

  async findAcademicFormation(collaboratorId: string): Promise<CollaboratorAcademicFormation[]> {
    const entity = await CollaboratorAcademicFormationRepository.findByCollaboratorId(collaboratorId) as CollaboratorAcademicFormation[]
    return entity
  },

  async findCertification(collaboratorId: string): Promise<CollaboratorCertification[]> {
    const entity = await CollaboratorCertificationRepository.findByCollaboratorId(collaboratorId) as CollaboratorCertification[]
    return entity
  },

}