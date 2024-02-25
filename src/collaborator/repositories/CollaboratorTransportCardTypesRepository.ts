import { CollaboratorTransportCardTypes } from './../../shared/entities/CollaboratorTransportCardTypes';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorTransportCardTypesDataSource } from '../dataSource/CollaboratorTransportCardTypesDataSource';


export const CollaboratorTransportCardTypesRepository = {

  async save(entity: CollaboratorTransportCardTypes[]) {
    try {
      const data = CollaboratorTransportCardTypesDataSource.create(entity)
      const dataReturn = await CollaboratorTransportCardTypesDataSource.save(data)
      return dataReturn
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async saveSingle(entity: CollaboratorTransportCardTypes) {
    try {
      const data = CollaboratorTransportCardTypesDataSource.create(entity)
      const dataReturn = await CollaboratorTransportCardTypesDataSource.save(data)
      return dataReturn
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorTransportCardTypes) {
    try {
      let collaborator = await CollaboratorTransportCardTypesDataSource.findOne({
        where: {
          collaboratorTransportId: entity.collaboratorTransportId
        }
      }) as CollaboratorTransportCardTypes
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorTransportCardTypesDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorTransportCardTypesDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  },

  async deleteAll(collaboratorTransportCardTypes: CollaboratorTransportCardTypes) {
    try {
      const data = await CollaboratorTransportCardTypesDataSource.delete(collaboratorTransportCardTypes)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  },

  async find(collaboratorTransportId: number) {
    const entities = await CollaboratorTransportCardTypesDataSource.find({
      where: {       
        collaboratorTransportId: collaboratorTransportId
      }     
    });
    return entities;
  }

}