import { CollaboratorDocumentDto } from '../models/dto/CollaboratorDocumentDto';
import { Request, Response } from 'express'
import { CollaboratorDto } from '../models/dto/CollaboratorDto'
import { CollaboratorService } from '../services/CollaboratorService'
import { CollaboratorAddressDto } from '../models/dto/CollaboratorAddressDto';
import { CollaboratorDependentsDto } from '../models/dto/CollaboratorDependentsDto';
import { CollaboratorBankDataDto } from '../models/dto/CollaboratorBankDataDto';
import { CollaboratorContractDataDto } from '../models/dto/CollaboratorContractDataDto';
import { CollaboratorProfessionalDataDto } from '../models/dto/CollaboratorProfessionalDataDto';
import { CollaboratorTransportVouchersDto } from '../models/dto/CollaboratorTransportVouchersDto';
import { CollaboratorCompanyDataDto } from '../models/dto/CollaboratorCompanyDataDto';

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

  async updateDocuments(req: Request, res: Response) {
    const collaboratorDto: CollaboratorDto = req.body as CollaboratorDto
    const user = await CollaboratorService.updateDocuments(collaboratorDto)
    return res.status(201).json(user)
  }

  async deleteDocument(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteDocument(id)
    return res.status(200).json(data)
  }

  async findDocuments(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findDocuments(id)
    return res.status(200).json(data)
  }

  async saveContacts(req: Request, res: Response) {
    const dto: CollaboratorDto = req.body as CollaboratorDto
    const entity = await CollaboratorService.saveContacts(dto)
    return res.status(201).json(entity)
  }

  async updateContacts(req: Request, res: Response) {
    const dto: CollaboratorDto = req.body as CollaboratorDto
    const entity = await CollaboratorService.updateContacts(dto)
    return res.status(201).json(entity)
  }
  
  async deleteContacts(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteContacts(id)
    return res.status(200).json(data)
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

  async updateAddress(req: Request, res: Response) {
    const collaboratorAddressDto: CollaboratorAddressDto = req.body as CollaboratorAddressDto
    const user = await CollaboratorService.updateAddress(collaboratorAddressDto)
    return res.status(201).json(user)
  }

  async findAddress(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findAddress(id)
    return res.status(200).json(data)
  }

  async saveDependents(req: Request, res: Response) {
    const dto: CollaboratorDependentsDto[] = req.body as CollaboratorDependentsDto[]
    const data = await CollaboratorService.saveDependents(dto)
    return res.status(201).json(data)
  }

  async updateDependents(req: Request, res: Response) {
    const dto: CollaboratorDependentsDto[] = req.body as CollaboratorDependentsDto[]
    const data = await CollaboratorService.updateDependents(dto)
    return res.status(201).json(data)
  }

  async deleteDependents(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteDependents(id)
    return res.status(200).json(data)
  }

  async findDependents(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findDependents(id)
    return res.status(200).json(data)
  }

  async saveBanckData(req: Request, res: Response) {
    const dto: CollaboratorBankDataDto = req.body as CollaboratorBankDataDto
    const data = await CollaboratorService.saveBanckData(dto)
    return res.status(201).json(data)
  }

  async updateBanckData(req: Request, res: Response) {
    const dto: CollaboratorBankDataDto = req.body as CollaboratorBankDataDto
    const data = await CollaboratorService.updateBanckData(dto)
    return res.status(201).json(data)
  }

  async findBanckData(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findBanckData(id)
    return res.status(200).json(data)
  }

  async saveContractData(req: Request, res: Response) {
    const dto: CollaboratorContractDataDto = req.body as CollaboratorContractDataDto
    const data = await CollaboratorService.saveContractData(dto)
    return res.status(201).json(data)
  }

  async updateContractData(req: Request, res: Response) {
    const dto: CollaboratorContractDataDto = req.body as CollaboratorContractDataDto
    const data = await CollaboratorService.updateContractData(dto)
    return res.status(201).json(data)
  }

  async findContractData(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findContractData(id)
    return res.status(200).json(data)
  }

  async saveProfessionalData(req: Request, res: Response) {
    const dto: CollaboratorProfessionalDataDto = req.body as CollaboratorProfessionalDataDto
    const data = await CollaboratorService.saveProfessionalData(dto)
    return res.status(201).json(data)
  }

  async updateProfessionalData(req: Request, res: Response) {
    const dto: CollaboratorProfessionalDataDto = req.body as CollaboratorProfessionalDataDto
    const data = await CollaboratorService.updateProfessionalData(dto)
    return res.status(201).json(data)
  }
  
  async deleteFormation(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteFormation(id)
    return res.status(200).json(data)
  }
  
  async deleteCertification(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteCertification(id)
    return res.status(200).json(data)
  }

  async findProfessionalData(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findProfessionalData(id)
    return res.status(200).json(data)
  }

  async saveTransportationVouchers(req: Request, res: Response) {
    const dto: CollaboratorTransportVouchersDto = req.body as CollaboratorTransportVouchersDto
    const data = await CollaboratorService.saveTransportationVouchers(dto)
    return res.status(201).json(data)
  }

  async updateTransportationVouchers(req: Request, res: Response) {
    const dto: CollaboratorTransportVouchersDto = req.body as CollaboratorTransportVouchersDto
    const data = await CollaboratorService.updateTransportationVouchers(dto)
    return res.status(201).json(data)
  }
  
  async deleteTransportationVouchers(req: Request, res: Response) {
    const { id } = req.params as any
    const data = await CollaboratorService.deleteTransportationVouchers(id)
    return res.status(200).json(data)
  }
  
  async findTransportationVouchers(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findTransportationVouchers(id)
    return res.status(200).json(data)
  }

  async saveCompanyData(req: Request, res: Response) {
    const dto: CollaboratorCompanyDataDto = req.body as CollaboratorCompanyDataDto
    const data = await CollaboratorService.saveCompanyData(dto)
    return res.status(201).json(data)
  }

  async updateCompanyData(req: Request, res: Response) {
    const dto: CollaboratorCompanyDataDto = req.body as CollaboratorCompanyDataDto
    const data = await CollaboratorService.updateCompanyData(dto)
    return res.status(201).json(data)
  }
  
  async findCompanyData(req: Request, res: Response) {
    const { id } = req.params
    const data = await CollaboratorService.findCompanyData(id)
    return res.status(200).json(data)
  }

}
