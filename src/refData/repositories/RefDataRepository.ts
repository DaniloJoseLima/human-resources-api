import { AppDataSource } from '../../data-source'
import { ContactTypes } from '../../shared/entities/ContactTypes'
import { DependentTypes } from '../../shared/entities/DependentTypes'
import { DocumentsTypes } from '../../shared/entities/DocumentsTypes'

import { EthnicityTypes } from '../../shared/entities/EthnicityTypes'
import { GenderTypes } from '../../shared/entities/GenderTypes'
import { MaritalStatusTypes } from '../../shared/entities/MaritalStatusTypes'
import { SchoolingTypes } from '../../shared/entities/SchoolingTypes'

export const EthnicityTypesRepository = AppDataSource.getRepository(EthnicityTypes)
export const MaritalStatusTypesRepository = AppDataSource.getRepository(MaritalStatusTypes)
export const GenderTypesRepository = AppDataSource.getRepository(GenderTypes)
export const DocumentsTypesRepository = AppDataSource.getRepository(DocumentsTypes)
export const SchoolingTypesRepository = AppDataSource.getRepository(SchoolingTypes)
export const ContactTypesRepository = AppDataSource.getRepository(ContactTypes)
export const DependentTypesRepository = AppDataSource.getRepository(DependentTypes)
