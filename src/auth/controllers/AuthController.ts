import { Request, Response } from 'express'

import { AuthService } from '../services/AuthService'

export class AuthController {
	async login(req: Request, res: Response) {
		const { email, password } = req.body		
    try {
      const login = await AuthService.login(email, password)
		  return res.json(login)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
	}
}
