import { Router } from 'express'
import { authMiddleware } from '../../shared/middlewares/authMiddleware'
import { UserController } from '../controllers/UserController'

const userRoutes = Router()

/**
 * @swagger
 * /user/create:
 *   post:
 *     tags: [Users]
 *     summary: Create new user
 *     description: Endpoint to create new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
userRoutes.post('/create', new UserController().create)
/**
 * @swagger
 * /user:
 *   put:
 *     tags: [Users]
 *     summary: Update new user
 *     description: Endpoint to update new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               roleId:
 *                 type: number
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
userRoutes.put('/', new UserController().update)
/**
 * @swagger
 * /user/update-passoword:
 *   put:
 *     tags: [Users]
 *     summary: Update passoword user
 *     description: Endpoint to update passoword user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful response
 */
userRoutes.put('/update-passoword', new UserController().updatePassoword)
/**
 * @swagger
 * /user:
 *   get:
 *     tags: [Users]
 *     summary: Find users
 *     description: Endpoint to find users
 *     responses:
 *       200:
 *         description: Successful response
 */
userRoutes.get('', authMiddleware, new UserController().findAll)
/**
 * @swagger
 * /user/:id:
 *   get:
 *     tags: [Users]
 *     summary: Find users
 *     description: Endpoint to find users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the users
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
userRoutes.get('/:id', authMiddleware, new UserController().find)

export default userRoutes
