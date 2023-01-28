import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { CollaboratorController } from '../controllers/CollaboratorController'

const collaboratorRoutes = Router()

//collaboratorRoutes.post('', authMiddleware, new CollaboratorController().save)
collaboratorRoutes.post('',authMiddleware, new CollaboratorController().save)
collaboratorRoutes.get('',authMiddleware, new CollaboratorController().list)
collaboratorRoutes.get('/:id',authMiddleware, new CollaboratorController().find)

export default collaboratorRoutes
