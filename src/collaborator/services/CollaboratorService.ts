
import { Collaborator } from '../../shared/entities/Collaborator';
import { CollaboratorDto } from '../models/dto/CollaboratorDto';
import { CollaboratorMap } from '../models/map/CollaboratorMap';
import { CollaboratorRepository } from '../repositories/CollaboratorRepository';

export const CollaboratorService = {

  async save(collaboratorDto: CollaboratorDto) {
    const entity = CollaboratorMap.toEntity(collaboratorDto)
		const collaborator = await CollaboratorRepository.save(entity)
		return collaborator
	},

  async update(collaboratorDto: CollaboratorDto) {
    const entity = CollaboratorMap.toEntity(collaboratorDto)
		const collaborator = await CollaboratorRepository.update(entity)
		return collaborator
	},

  async list(field: string, q: string, pageNumber: number) {
		let data = await CollaboratorRepository.list(field, q, pageNumber)
    data.list = data.list.map((entity: any) => {
      return CollaboratorMap.toDto(entity)
    })
		return data
	},
  
  async find(id: string) {
		const data = await CollaboratorRepository.find(id) as any
    const dto = CollaboratorMap.toDto(data)
		return dto
	},
  
  async registrationVerification(id: string) {
		const data = await CollaboratorRepository.registrationVerification(id) as any
		return data
	},
}