import { CollaboratorDocumentDto } from '../models/dto/CollaboratorDocumentDto';
import { Request, Response } from 'express'
import { CollaboratorDto } from '../models/dto/CollaboratorDto'
import { CollaboratorService } from '../services/CollaboratorService'
import { CollaboratorAddressDto } from '../models/dto/CollaboratorAddressDto';

export class CollaboratorController {

  async save(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.save(collaboratorDto)
    return res.status(201).json(user)
  }

  async update(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.update(collaboratorDto)
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

  async registrationVerification(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.registrationVerification(id)
    return res.status(200).json(data)
  }

  async saveDocuments(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.saveDocuments(collaboratorDto)
    return res.status(201).json(user)
  }

  async findDocuments(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findDocuments(id)
    return res.status(200).json(data)
  }

  async saveContacts(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.saveContacts(collaboratorDto)
    return res.status(201).json(user)
  }

  async findContacts(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findContacts(id)
    return res.status(200).json(data)
  }

  async saveAddress(req: Request, res: Response) {
    const collaboratorAddressDto: CollaboratorAddressDto = req.body as CollaboratorAddressDto
    const user = await CollaboratorService.saveAddress(collaboratorAddressDto)
    return res.status(201).json(user)
  }

  async findAddress(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findAddress(id)
    return res.status(200).json(data)
  }
}
