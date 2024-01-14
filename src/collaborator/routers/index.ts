import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { CollaboratorController } from '../controllers/CollaboratorController'

const collaboratorRoutes = Router()

collaboratorRoutes.post('',authMiddleware, new CollaboratorController().save)
collaboratorRoutes.put('',authMiddleware, new CollaboratorController().update)
collaboratorRoutes.get('',authMiddleware, new CollaboratorController().list)
collaboratorRoutes.get('/:id',authMiddleware, new CollaboratorController().find)
collaboratorRoutes.get('/:id/registration-verification',authMiddleware, new CollaboratorController().registrationVerification)

collaboratorRoutes.post('/documents',authMiddleware, new CollaboratorController().saveDocuments)
collaboratorRoutes.put('/documents',authMiddleware, new CollaboratorController().updateDocuments)
collaboratorRoutes.get('/:id/documents',authMiddleware, new CollaboratorController().findDocuments)

collaboratorRoutes.post('/contacts',authMiddleware, new CollaboratorController().saveContacts)
collaboratorRoutes.put('/contacts',authMiddleware, new CollaboratorController().updateContacts)
collaboratorRoutes.get('/:id/contacts',authMiddleware, new CollaboratorController().findContacts)

collaboratorRoutes.post('/address',authMiddleware, new CollaboratorController().saveAddress)
collaboratorRoutes.put('/address',authMiddleware, new CollaboratorController().updateAddress)
collaboratorRoutes.get('/:id/address',authMiddleware, new CollaboratorController().findAddress)

collaboratorRoutes.post('/dependents',authMiddleware, new CollaboratorController().saveDependents)
collaboratorRoutes.put('/dependents',authMiddleware, new CollaboratorController().updateDependents)
collaboratorRoutes.get('/:id/dependents',authMiddleware, new CollaboratorController().findDependents)

collaboratorRoutes.post('/bank-data',authMiddleware, new CollaboratorController().saveBanckData)
collaboratorRoutes.put('/bank-data',authMiddleware, new CollaboratorController().updateBanckData)
collaboratorRoutes.get('/:id/bank-data',authMiddleware, new CollaboratorController().findBanckData)

collaboratorRoutes.post('/contract-data',authMiddleware, new CollaboratorController().saveContractData)
collaboratorRoutes.put('/contract-data',authMiddleware, new CollaboratorController().updateContractData)
collaboratorRoutes.get('/:id/contract-data',authMiddleware, new CollaboratorController().findContractData)


collaboratorRoutes.post('/professional-data',authMiddleware, new CollaboratorController().saveProfessionalData)
collaboratorRoutes.put('/professional-data',authMiddleware, new CollaboratorController().updateProfessionalData)
collaboratorRoutes.get('/:id/professional-data',authMiddleware, new CollaboratorController().findProfessionalData)

export default collaboratorRoutes
