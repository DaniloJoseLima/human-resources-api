import { CollaboratorFormation } from './../../shared/entities/CollaboratorFormation';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorFormationSource } from '../dataSource/CollaboratorFormationSource';


export const CollaboratorFormationRepository = {

  async save(entity: CollaboratorFormation) {
    try {
      const data = CollaboratorFormationSource.create(entity)
      await CollaboratorFormationSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorFormation) {
    try {
      let collaborator = await CollaboratorFormationSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorFormation
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorFormationSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async findByCollaboratorId(collaboratorId: string) {
    try {
      let data = await CollaboratorFormationSource.findOne({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorFormation

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorFormationSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}