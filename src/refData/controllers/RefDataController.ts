import { Request, Response } from 'express'
import { RefDataService } from '../services/RefDataService'

export class RefDataController {
  async getEthnicityTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getEthnicityTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }

  async getMaritalStatusTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getMaritalStatusTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }

  async getGenderTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getGenderTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }

  async getDocumentsTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getDocumentsTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }
}