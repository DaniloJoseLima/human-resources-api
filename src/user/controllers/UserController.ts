import { Request, Response } from 'express'

import { UserService } from '../services/userService'

export class UserController {
	async create(req: Request, res: Response) {
		const { name, email, password } = req.body

    const user = await UserService.create(name, email, password)

		return res.status(201).json(user)
	}

	async login(req: Request, res: Response) {
		const { email, password } = req.body		
    try {
      const userLogin = await UserService.login(email, password)
		  return res.json(userLogin)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
	}

  //TODO: Temporário para receber Bearer Token
	async getProfile(req: Request, res: Response) {
		return res.json(req.user)
	}
}
