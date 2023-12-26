import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { CollaboratorController } from '../controllers/CollaboratorController'

const collaboratorRoutes = Router()

collaboratorRoutes.post('',authMiddleware, new CollaboratorController().save)
collaboratorRoutes.put('',authMiddleware, new CollaboratorController().update)
collaboratorRoutes.get('',authMiddleware, new CollaboratorController().list)
collaboratorRoutes.get('/:id',authMiddleware, new CollaboratorController().find)
collaboratorRoutes.get('/:id/registration-verification',authMiddleware, new CollaboratorController().registrationVerification)

export default collaboratorRoutes
