import { Request, Response } from 'express'
import { CollaboratorDto } from '../models/dto/CollaboratorDto'
import { CollaboratorService } from '../services/CollaboratorService'

export class CollaboratorController {

	async save(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.save(collaboratorDto)
		return res.status(201).json(user)
	}

  async list(req: Request, res: Response) {
    const { field, q, page } = req.query as { field: string, q: string, page: string }
    const pageNumber = page ? parseInt(page) - 1 : 0 as number;
    const user = await CollaboratorService.list(field, q, pageNumber)
		return res.status(201).json(user)
	}

  async find(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.find(id)
		return res.status(201).json(data)
	}
}
