import { AppDataSource } from '../../data-source'
import { CollaboratorCertification } from '../../shared/entities/CollaboratorCertification'

export const CollaboratorCertificationSource = AppDataSource.getRepository(CollaboratorCertification)
