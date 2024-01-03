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
collaboratorRoutes.get('/:id/documents',authMiddleware, new CollaboratorController().findDocuments)

collaboratorRoutes.post('/contacts',authMiddleware, new CollaboratorController().saveContacts)
collaboratorRoutes.get('/:id/contacts',authMiddleware, new CollaboratorController().findContacts)

collaboratorRoutes.post('/address',authMiddleware, new CollaboratorController().saveAddress)
collaboratorRoutes.get('/:id/address',authMiddleware, new CollaboratorController().findAddress)

export default collaboratorRoutes
