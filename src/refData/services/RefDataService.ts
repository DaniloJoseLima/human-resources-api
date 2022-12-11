import { DocumentsTypesRepository, EthnicityTypesRepository, GenderTypesRepository, MaritalStatusTypesRepository } from "../repositories/RefDataRepository"

export const RefDataService = {

  async getEthnicityTypes() {
		const types = await EthnicityTypesRepository.find()
		return types
	},
  
  async getMaritalStatusTypes() {
		const types = await MaritalStatusTypesRepository.find()
		return types
	},
  
  async getGenderTypes() {
		const types = await GenderTypesRepository.find()
		return types
	},
  
  async getDocumentsTypes() {
		const types = await DocumentsTypesRepository.find()
		return types
	},
}