import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { UserController } from '../controllers/UserController'

const userRoutes = Router()

userRoutes.post('/create', new UserController().create)

userRoutes.put('/', new UserController().update)

userRoutes.get('', authMiddleware, new UserController().findAll)

userRoutes.get('/:id', authMiddleware, new UserController().find)

export default userRoutes
