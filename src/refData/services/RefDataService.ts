import { RefDataRepository } from "../repositories/RefDataRepository"

export const RefDataService = {

  async getEthnicityTypes() {
    const types = await RefDataRepository.getEthnicityTypes()
    return types
  },

  async getMaritalStatusTypes() {
    const types = await RefDataRepository.getMaritalStatusTypes()
    return types
  },

  async getGenderTypes() {
    const types = await RefDataRepository.getGenderTypes()
    return types
  },

  async getDocumentsTypes() {
    const types = await RefDataRepository.getDocumentsTypes()
    return types
  },

  async getSchoolingTypes() {
    const types = await RefDataRepository.getSchoolingTypes()
    return types
  },

  async getContactTypes() {
    const types = await RefDataRepository.getContactTypes()
    return types
  },

  async getDependentTypes() {
    const types = await RefDataRepository.getDependentTypes()
    return types
  },

  async getTransportTypes() {
    const types = await RefDataRepository.getTransportTypes()
    return types
  },

  async getTransportCardTypes() {
    const types = await RefDataRepository.getTransportCardTypes()
    return types
  },
}