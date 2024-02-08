import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'

const authRoutes = Router()

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Login]
 *     summary: Login
 *     description: Endpoint to Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
authRoutes.post('/login', new AuthController().login)

export default authRoutes
