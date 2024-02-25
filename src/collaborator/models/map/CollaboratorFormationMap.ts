import { CollaboratorFormation } from '../../../shared/entities/CollaboratorFormation';
import { SchoolingTypes } from '../../../shared/entities/SchoolingTypes';
import { CollaboratorProfessionalDataDto } from '../dto/CollaboratorProfessionalDataDto';

export class CollaboratorFormationMap {

  public static toEntity(dto: CollaboratorProfessionalDataDto): CollaboratorFormation {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      schoolingTypeId: dto.schoolingTypes.id
    }
  }

  public static toDto(entity: CollaboratorFormation): CollaboratorProfessionalDataDto {
    const schoolingTypes = new SchoolingTypes()
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      schoolingTypes: schoolingTypes
    }
  }
}