import { Router } from 'express'
import { authMiddleware } from '../../middlewares/authMiddleware'
import { UserController } from '../controllers/UserController'

const userRoutes = Router()

userRoutes.post('/user', new UserController().create)
userRoutes.post('/login', new UserController().login)


userRoutes.get('/profile', authMiddleware, new UserController().getProfile)

export default userRoutes
