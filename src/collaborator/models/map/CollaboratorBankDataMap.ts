import { CollaboratorBankData } from '../../../shared/entities/CollaboratorBankData';
import { CollaboratorBankDataDto } from '../dto/CollaboratorBankDataDto';

export class CollaboratorBankDataMap {

  public static toEntity(dto: CollaboratorBankDataDto): CollaboratorBankData {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      name: dto.name,
      agency: dto.agency,
      account: dto.account,
      accountType: dto.accountType.id,
      accountCategory: dto.accountCategory.id,
      pixKey: dto.pixKey,
      pixKeyType: dto.pixKeyType.id,
    }
  }

  public static toDto(entity: CollaboratorBankData): CollaboratorBankDataDto {
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      name: entity.name,
      agency: entity.agency,
      account: entity.account,
      accountType: entity.accountType,
      accountCategory: entity.accountCategory,
      pixKey: entity.pixKey,
      pixKeyType: entity.pixKeyType,
    }
  }
}