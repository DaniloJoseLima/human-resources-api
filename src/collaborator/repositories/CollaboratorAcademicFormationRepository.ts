import { CollaboratorAcademicFormation } from './../../shared/entities/CollaboratorAcademicFormation';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorAcademicFormationSource } from '../dataSource/CollaboratorAcademicFormationSource';


export const CollaboratorAcademicFormationRepository = {

  async save(entity: CollaboratorAcademicFormation[]) {
    try {
      const data = CollaboratorAcademicFormationSource.create(entity)
      await CollaboratorAcademicFormationSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorAcademicFormation) {
    try {
      let collaborator = await CollaboratorAcademicFormationSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorAcademicFormation
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorAcademicFormationSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async findByCollaboratorId(collaboratorId: string) {
    try {
      let data = await CollaboratorAcademicFormationSource.find({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorAcademicFormation[]

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorAcademicFormationSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}