import { CollaboratorAddresses } from './../../shared/entities/CollaboratorAddresses';
import { CollaboratorContacts } from '../../shared/entities/CollaboratorContacts';
import { BadRequestError } from '../../shared/helpers/api-erros'
import { CollaboratorAddressDataSource } from '../dataSource/CollaboratorAddressDataSource';


export const CollaboratorAddressRepository = {

  async save(collaboratorAddresses: CollaboratorAddresses) {
    try {
      const collaborator = CollaboratorAddressDataSource.create(collaboratorAddresses)
      await CollaboratorAddressDataSource.save(collaborator)
      return collaborator
    } catch (error) {
      throw new BadRequestError('Error address list')
    }
  },

  async update(collaboratorAddresses: CollaboratorAddresses) {
    try {
      let collaborator = await CollaboratorAddressDataSource.findOne({
        where: {
          id: collaboratorAddresses.id
        }
      }) as CollaboratorAddresses
      collaborator = {
        ...collaborator,
        ...collaboratorAddresses,
      }
      const result = await CollaboratorAddressDataSource.save(collaborator);
      return result
    } catch (error) {
      console.log(error)
      throw new BadRequestError('Erro ao salvar address')
    }
  },

  async find(collaboratorId: string) {
    let collaboratorAddress = await CollaboratorAddressDataSource.find({
      where: {
        collaboratorId: collaboratorId
      }
    }) as CollaboratorAddresses[]

    return collaboratorAddress[0]
  },
  
  async delete(collaboratorContactId: number) {
    const value = await CollaboratorAddressDataSource.delete(collaboratorContactId)
    return value
  }

}