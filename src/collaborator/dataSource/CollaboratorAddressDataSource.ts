import { AppDataSource } from '../../data-source'
import { CollaboratorAddresses } from '../../shared/entities/CollaboratorAddresses'

export const CollaboratorAddressDataSource = AppDataSource.getRepository(CollaboratorAddresses)
