import { CollaboratorContractData } from '../../../shared/entities/CollaboratorContractData';
import { CollaboratorContractDataDto } from '../dto/CollaboratorContractDataDto';

export class CollaboratorContractDataMap {

  public static toEntity(dto: CollaboratorContractDataDto): CollaboratorContractData {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      remuneration: dto.remuneration,
      occupation: dto.occupation,
      start: dto.start,
      end: dto.end,
      workingHours: dto.workingHours,
      comments: dto.comments,
    }
  }

  public static toDto(entity: CollaboratorContractData): CollaboratorContractDataDto {
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      remuneration: entity.remuneration,
      occupation: entity.occupation,
      start: entity.start,
      end: entity.end,
      workingHours: entity.workingHours,
      comments: entity.comments,
    }
  }
}