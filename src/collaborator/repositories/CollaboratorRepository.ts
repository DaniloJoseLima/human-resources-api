import { Collaborator } from '../../shared/entities/Collaborator'
import { BadRequestError } from '../../shared/helpers/api-erros'

import { CollaboratorDataSource } from "../dataSource/CollaboratorDataSource"

import { listCollaborator, listCollaboratorCount, findCollaborator, registrationVerification, totalType, monthBirthdayList, companyBirthdayList, listExportToExcelCollaborator } from './queries/collaborator'

export const CollaboratorRepository = {

  async save(entity: Collaborator) {
    try {
      const entityRef = { 
        ...entity ,
        maritalStatusTypeId: entity.maritalStatus,
        ethnicityTypeId: entity.ethnicity,
        genderTypeId: entity.gender,
      }
      const collaborator = CollaboratorDataSource.create(entityRef)
      await CollaboratorDataSource.save(collaborator)
      return collaborator
    } catch (error) {
      throw new BadRequestError('Erro ao salvar colaborador')
    }
  },

  async update(entity: Collaborator) {
    try {
      let collaborator = await CollaboratorDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as Collaborator
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorDataSource.save(collaborator);
      return result
    } catch (error) {
      console.log(error)
      throw new BadRequestError('Erro ao salvar colaborador')
    }
  },

  async list(field: string, q: string, pageNumber: number) {
    const limitRegisters = 10;
    pageNumber = pageNumber * limitRegisters;
    const [list, count] = await Promise.all([
      CollaboratorDataSource.query(listCollaborator(field, q, pageNumber, limitRegisters)),
      CollaboratorDataSource.query(listCollaboratorCount(field, q, limitRegisters))
    ])
    const { totalRegisters } = count[0]
    const pages = Math.ceil(totalRegisters / limitRegisters)
    return { totalRegisters, pages, list }
  },

  async listExportToExcel(field: string, q: string) {
    const [list] = await Promise.all([
      CollaboratorDataSource.query(listExportToExcelCollaborator(field, q)),
    ])
    return list
  },

  async find(id: string) {
    const [data] = await Promise.all([
      CollaboratorDataSource.query(findCollaborator(id)),
    ])
    return data[0]
  },

  async registrationVerification(id: string) {
    const [data] = await Promise.all([
      CollaboratorDataSource.query(registrationVerification(id)),
    ])
    return data[0]
  },
  
  async totalType() {
    const [data] = await Promise.all([
      CollaboratorDataSource.query(totalType()),
    ])
    return data[0]
  },
  
  async monthBirthdayList() {
    const [data] = await Promise.all([
      CollaboratorDataSource.query(monthBirthdayList()),
    ])
    return data
  },
  
  async companyBirthdayList() {
    const [data] = await Promise.all([
      CollaboratorDataSource.query(companyBirthdayList()),
    ])
    return data
  },
}