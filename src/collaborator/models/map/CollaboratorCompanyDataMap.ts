import { CollaboratorCompanyData } from "../../../shared/entities/CollaboratorCompanyData";
import { CollaboratorCompanyDataDto } from "../dto/CollaboratorCompanyDataDto";

export class CollaboratorCompanyDataMap {

  public static toEntity(dto: CollaboratorCompanyDataDto): CollaboratorCompanyData {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      corporateName: dto.corporateName,
      fantasyName: dto.fantasyName,
      cnpj: dto.cnpj,
      stateRegistration: dto.stateRegistration,
      municipalRegistration: dto.municipalRegistration,
      mainActivity: dto.mainActivity,
      secondaryActivity: dto.secondaryActivity,
      updatedAt: dto.updatedAt,
      createdAt: dto.createdAt,
    }
  }

  public static toDto(entity: CollaboratorCompanyData): CollaboratorCompanyDataDto {
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      corporateName: entity.corporateName,
      fantasyName: entity.fantasyName,
      cnpj: entity.cnpj,
      stateRegistration: entity.stateRegistration,
      municipalRegistration: entity.municipalRegistration,
      mainActivity: entity.mainActivity,
      secondaryActivity: entity.secondaryActivity,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    }
  }
}