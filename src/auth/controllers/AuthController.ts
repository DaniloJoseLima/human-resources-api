import { Request, Response } from 'express'

import { AuthService } from '../services/AuthService'
import { UserDto } from '../models/dto/UserDto'

export class AuthController {
	async login(req: Request, res: Response) {
		const user = req.body as UserDto
    try {
      const login = await AuthService.login(user)
		  return res.json(login)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
	}
}
