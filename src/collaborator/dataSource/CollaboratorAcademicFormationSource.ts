import { AppDataSource } from '../../data-source'
import { CollaboratorAcademicFormation } from '../../shared/entities/CollaboratorAcademicFormation'

export const CollaboratorAcademicFormationSource = AppDataSource.getRepository(CollaboratorAcademicFormation)
