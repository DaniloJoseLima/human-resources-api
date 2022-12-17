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

  async getSchoolingTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getSchoolingTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }
  
  async getContactTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getContactTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }

  async getDependentTypes(req: Request, res: Response) {
    try {
      const types = await RefDataService.getDependentTypes()
		  return res.json(types)
    } catch (error: any) {
      return res.status(500).json({message: error.message})
    }
  }
}