import { CollaboratorBankData } from './../../shared/entities/CollaboratorBankData';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorBankDataSource } from '../dataSource/CollaboratorBankDataSource';


export const CollaboratorBankDataRepository = {

  async save(entity: CollaboratorBankData) {
    try {
      const data = CollaboratorBankDataSource.create(entity)
      await CollaboratorBankDataSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorBankData) {
    try {
      let collaborator = await CollaboratorBankDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorBankData
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorBankDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async find(collaboratorId: string) {
    try {
      let data = await CollaboratorBankDataSource.findOne({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorBankData

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorBankDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}