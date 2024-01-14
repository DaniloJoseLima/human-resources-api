import { CollaboratorCertification } from './../../shared/entities/CollaboratorCertification';
import { CollaboratorAcademicFormation } from '../../shared/entities/CollaboratorAcademicFormation';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorCertificationSource } from '../dataSource/CollaboratorCertificationSource';


export const CollaboratorCertificationRepository = {

  async save(entity: CollaboratorCertification[]) {
    try {
      const data = CollaboratorCertificationSource.create(entity)
      await CollaboratorCertificationSource.save(data)
      return data
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorCertification) {
    try {
      let collaborator = await CollaboratorCertificationSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorCertification
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorCertificationSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async findByCollaboratorId(collaboratorId: string) {
    try {
      let data = await CollaboratorCertificationSource.find({
        where: {
          collaboratorId: collaboratorId
        }
      }) as CollaboratorCertification[]

      return data
    } catch (error) {
      throw new BadRequestError('Error find')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorCertificationSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  }

}