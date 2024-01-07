import { CollaboratorDependents } from '../../shared/entities/CollaboratorDependents';
import { BadRequestError } from '../../shared/helpers/api-erros'

import { CollaboratorDependentsDataSource } from '../dataSource/CollaboratorDependentsDataSource';

export const CollaboratorDependentsRepository = {

  async save(entity: CollaboratorDependents[]) {
    try {
      const data = CollaboratorDependentsDataSource.create(entity)
      await CollaboratorDependentsDataSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorDependents) {
    try {
      let collaborator = await CollaboratorDependentsDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorDependents
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorDependentsDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async find(collaboratorId: string) {
    try {
      let data = await CollaboratorDependentsDataSource.find({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorDependents[]
  
      return data      
    } catch (error) {
      throw new BadRequestError('Error find')      
    }
  },
  
  async delete(id: number) {
    try {
      const data = await CollaboratorDependentsDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')      
    }
  }

}