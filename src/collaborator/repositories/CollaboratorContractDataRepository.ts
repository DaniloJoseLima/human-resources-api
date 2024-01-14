import { CollaboratorContractData } from './../../shared/entities/CollaboratorContractData';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorContractDataSource } from '../dataSource/CollaboratorContractDataSource';


export const CollaboratorContractDataRepository = {

  async save(entity: CollaboratorContractData) {
    try {
      const data = CollaboratorContractDataSource.create(entity)
      await CollaboratorContractDataSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorContractData) {
    try {
      let collaborator = await CollaboratorContractDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorContractData
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorContractDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async find(collaboratorId: string) {
    try {
      let data = await CollaboratorContractDataSource.findOne({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorContractData

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorContractDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}