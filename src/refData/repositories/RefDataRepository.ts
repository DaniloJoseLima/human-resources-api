import { AppDataSource } from '../../data-source'
import { DocumentsTypes } from '../../shared/entities/DocumentsTypes'

import { EthnicityTypes } from '../../shared/entities/EthnicityTypes'
import { GenderTypes } from '../../shared/entities/GenderTypes'
import { MaritalStatusTypes } from '../../shared/entities/MaritalStatusTypes'

export const EthnicityTypesRepository = AppDataSource.getRepository(EthnicityTypes)
export const MaritalStatusTypesRepository = AppDataSource.getRepository(MaritalStatusTypes)
export const GenderTypesRepository = AppDataSource.getRepository(GenderTypes)
export const DocumentsTypesRepository = AppDataSource.getRepository(DocumentsTypes)
