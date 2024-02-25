import { CollaboratorTransportVouchersDto } from './../models/dto/CollaboratorTransportVouchersDto';
import { CollaboratorTransport } from './../../shared/entities/CollaboratorTransport';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorTransportDataSource } from '../dataSource/CollaboratorTransportDataSource';
import { findTypeTransportOneWay, findTypeTransportReturn } from './queries/collaborator';


export const CollaboratorTransportRepository = {

  async save(entity: CollaboratorTransport[]) {
    try {
      const data = CollaboratorTransportDataSource.create(entity)
      const dataReturn = await CollaboratorTransportDataSource.save(data)
      return dataReturn
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async saveSingle(entity: CollaboratorTransport) {
    try {
      const data = CollaboratorTransportDataSource.create(entity)
      const dataReturn = await CollaboratorTransportDataSource.save(data)
      return dataReturn
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorTransport) {
    try {
      let collaborator = await CollaboratorTransportDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorTransport
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorTransportDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async findByCollaboratorId(collaboratorId: string) {
    try {
      let data = await CollaboratorTransportDataSource.find({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorTransport[]

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async findTypeTransportOneWay(collaboratorId: string) {
    try {
      const [typeTransportOneWay] = await Promise.all([
        CollaboratorTransportDataSource.query(findTypeTransportOneWay(collaboratorId)),
      ])
      const list = []
      for (let index = 0; index < typeTransportOneWay.length; index++) {
        const element = typeTransportOneWay[index];
        list.push({...element})
      }
      return list && list.length > 0 ? list : null
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },
  
  async findTypeTransportReturn(collaboratorId: string) {
    try {
      const [typeTransportReturn] = await Promise.all([
        CollaboratorTransportDataSource.query(findTypeTransportReturn(collaboratorId)),
      ])
      const list = []
      for (let index = 0; index < typeTransportReturn.length; index++) {
        const element = typeTransportReturn[index];
        list.push({...element})
      }
      return list && list.length > 0 ? list : null
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorTransportDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}