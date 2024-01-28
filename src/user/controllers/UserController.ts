import { UserDto } from '../models/dto/UserDto';
import { UserService } from './../services/userService';
import { Request, Response } from 'express'

export class UserController {
	async create(req: Request, res: Response) {
		const { name, email, password } = req.body
    try {      
      const user = await UserService.create(name, email, password)  
      return res.status(201).json(user)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
	}
  
  async update(req: Request, res: Response) {
    const userDto = req.body as UserDto
    try {      
      const user = await UserService.update(userDto)  
      return res.status(201).json(user)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
	}

  async updatePassoword(req: Request, res: Response) {
    const { id, password } = req.body
    try {      
      const user = await UserService.updatePassoword(id, password)  
      return res.status(201).json(user)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }

	async findAll(req: Request, res: Response) {
    const { field, q, page } = req.query as { field: string, q: string, page: string }
    const pageNumber = page ? parseInt(page) - 1 : 0 as number;
    const data = await UserService.findAll(field, q, pageNumber)
		return res.status(201).json(data)
	}

  
	async find(req: Request, res: Response) {
    const { id } = req.params
    const data = await UserService.find(id)
		return res.status(201).json(data)
	}
}
