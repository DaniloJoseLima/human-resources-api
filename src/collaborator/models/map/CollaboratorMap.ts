import { Collaborator } from "../../../shared/entities/Collaborator";
import { CollaboratorDto } from "../dto/CollaboratorDto";

export class CollaboratorMap  {

  public static toEntity(collaboratorDto: CollaboratorDto): any {
    return {
      id: collaboratorDto.id,
      contractType: collaboratorDto.contractType,
      name: collaboratorDto.name,
      email: collaboratorDto.email,
      birthDate: collaboratorDto.birthDate,
      motherName: collaboratorDto.motherName,
      fatherName: collaboratorDto.fatherName,
      nationality: collaboratorDto.nationality,
      naturalness: collaboratorDto.naturalness,
      updated_at: collaboratorDto.updatedAt,
      created_at: collaboratorDto.createdAt,
      maritalStatus: collaboratorDto.maritalStatus.id,
      ethnicity: collaboratorDto.ethnicity.id,
      gender: collaboratorDto.gender.id,
      contract: collaboratorDto.contract
    }
  }

  public static toDto(collaborator: Collaborator): any {

    if(!collaborator) {
      return null
    }

    const maritalStatus = collaborator && collaborator.maritalStatus ? JSON.parse(collaborator.maritalStatus) : undefined
    const ethnicity = collaborator && collaborator.ethnicity ? JSON.parse(collaborator.ethnicity) : undefined
    const gender = collaborator && collaborator.gender ? JSON.parse(collaborator.gender) : undefined
    const contract = collaborator && collaborator.contract ? JSON.parse(collaborator.contract) : undefined

    return {
      id: collaborator.id,
      contractType: collaborator.contractType,
      name: collaborator.name,
      email: collaborator.email,
      birthDate: collaborator.birthDate,
      motherName: collaborator.motherName,
      fatherName: collaborator.fatherName,
      nationality: collaborator.nationality,
      naturalness: collaborator.naturalness,
      updatedAt: collaborator.updatedAt,
      createdAt: collaborator.createdAt,
      maritalStatus: maritalStatus,
      ethnicity: ethnicity,
      gender: gender,
      contract: contract
    }
  }
}