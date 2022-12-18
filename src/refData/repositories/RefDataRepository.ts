import { ContactTypesRepository, DependentTypesRepository, DocumentsTypesRepository, EthnicityTypesRepository, GenderTypesRepository, MaritalStatusTypesRepository, SchoolingTypesRepository } from "../dataSource/RefDataDataSource"

export const RefDataRepository = {

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
    const types = await DocumentsTypesRepository.find({order: {name: 'ASC'}})
    return types
  },

  async getSchoolingTypes() {
    const types = await SchoolingTypesRepository.find()
    return types
  },

  async getContactTypes() {
    const types = await ContactTypesRepository.find()
    return types
  },

  async getDependentTypes() {
    const types = await DependentTypesRepository.find()
    return types
  },
}