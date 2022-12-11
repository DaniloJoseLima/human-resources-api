import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { UserController } from '../controllers/UserController'

const userRoutes = Router()

userRoutes.post('/create', new UserController().create)

//TODO: Temporário para receber Bearer Token
userRoutes.get('/profile', authMiddleware, new UserController().getProfile)

export default userRoutes
