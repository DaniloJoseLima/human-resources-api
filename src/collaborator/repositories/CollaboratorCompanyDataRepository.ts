import { CollaboratorCompanyData } from './../../shared/entities/CollaboratorCompanyData';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorCompanyDataSource } from '../dataSource/CollaboratorCompanyDataSource';


export const CollaboratorCompanyDataRepository = {

  async save(entity: CollaboratorCompanyData) {
    try {
      const data = CollaboratorCompanyDataSource.create(entity)
      const dataReturn = await CollaboratorCompanyDataSource.save(data)
      return dataReturn
    } catch (error) {
      throw new BadRequestError('Error save')
    }
  },

  async update(entity: CollaboratorCompanyData) {
    try {
      let collaborator = await CollaboratorCompanyDataSource.findOne({
        where: {
          id: entity.id
        }
      }) as CollaboratorCompanyData
      collaborator = {
        ...collaborator,
        ...entity,
      }
      const result = await CollaboratorCompanyDataSource.save(collaborator);
      return result
    } catch (error) {
      throw new BadRequestError('Error update')
    }
  },

  async delete(id: number) {
    try {
      const data = await CollaboratorCompanyDataSource.delete(id)
      return data
    } catch (error) {
      throw new BadRequestError('Error delete')
    }
  },

  async find(collaboratorId: string) {
    const entities = await CollaboratorCompanyDataSource.findOne({
      where: {       
        collaboratorId: collaboratorId
      }     
    });
    return entities;
  }

}