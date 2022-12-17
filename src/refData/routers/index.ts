import { Router } from 'express'
import { RefDataController } from '../controllers/RefDataController'

const refDataRoutes = Router()

refDataRoutes.get('/ethnicity-types', new RefDataController().getEthnicityTypes)
refDataRoutes.get('/marital-status-types', new RefDataController().getMaritalStatusTypes)
refDataRoutes.get('/gender-types', new RefDataController().getGenderTypes)
refDataRoutes.get('/documents-types', new RefDataController().getDocumentsTypes)
refDataRoutes.get('/schooling-types', new RefDataController().getSchoolingTypes)
refDataRoutes.get('/contact-types', new RefDataController().getContactTypes)
refDataRoutes.get('/dependent-types', new RefDataController().getDependentTypes)

export default refDataRoutes
