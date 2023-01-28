import { Collaborator } from '../../shared/entities/Collaborator'
import { BadRequestError } from '../../shared/helpers/api-erros'

import { CollaboratorDataSource } from "../dataSource/CollaboratorDataSource"

import { listCollaborator, listCollaboratorCount } from './queries/collaborator'

export const CollaboratorRepository = {

  async save(entity: Collaborator) {
    try {
      const collaborator = CollaboratorDataSource.create(entity)
      await CollaboratorDataSource.save(collaborator)
      return collaborator
    } catch (error) {
      throw new BadRequestError('Erro ao salvar colaborador')
    }
  },

  async list(field: string, q: string, pageNumber: number) {
    const limitRegisters = 10;
    const [list, count] = await Promise.all([
      CollaboratorDataSource.query(listCollaborator(field, q, pageNumber, limitRegisters)),
      CollaboratorDataSource.query(listCollaboratorCount(field, q, limitRegisters))
    ])
    const { totalRegisters } = count[0]
    const pages = Math.ceil(totalRegisters / limitRegisters)
    return { totalRegisters, pages, list }
  },

  async find(id: string) {
    const data = await CollaboratorDataSource.findOne({
      where: {
        id: id
      }
    })
    return data
  },

}