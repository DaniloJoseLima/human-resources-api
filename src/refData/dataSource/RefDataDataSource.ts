import { AppDataSource } from '../../data-source'
import { ContactTypes } from '../../shared/entities/ContactTypes'
import { DependentTypes } from '../../shared/entities/DependentTypes'
import { DocumentsTypes } from '../../shared/entities/DocumentsTypes'

import { EthnicityTypes } from '../../shared/entities/EthnicityTypes'
import { GenderTypes } from '../../shared/entities/GenderTypes'
import { MaritalStatusTypes } from '../../shared/entities/MaritalStatusTypes'
import { Roles } from '../../shared/entities/Roles'
import { SchoolingTypes } from '../../shared/entities/SchoolingTypes'
import { TransportCardTypes } from '../../shared/entities/TransportCardTypes'
import { TransportTypes } from '../../shared/entities/TransportTypes'

export const EthnicityTypesRepository = AppDataSource.getRepository(EthnicityTypes)
export const MaritalStatusTypesRepository = AppDataSource.getRepository(MaritalStatusTypes)
export const GenderTypesRepository = AppDataSource.getRepository(GenderTypes)
export const DocumentsTypesRepository = AppDataSource.getRepository(DocumentsTypes)
export const SchoolingTypesRepository = AppDataSource.getRepository(SchoolingTypes)
export const ContactTypesRepository = AppDataSource.getRepository(ContactTypes)
export const DependentTypesRepository = AppDataSource.getRepository(DependentTypes)
export const TransportTypesRepository = AppDataSource.getRepository(TransportTypes)
export const TransportCardTypesRepository = AppDataSource.getRepository(TransportCardTypes)
export const RolesRepository = AppDataSource.getRepository(Roles)
