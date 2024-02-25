import { CollaboratorTransport } from '../../../shared/entities/CollaboratorTransport';
import { TransportTypes } from '../../../shared/entities/TransportTypes';
import { CollaboratorTransportDto } from '../dto/CollaboratorTransportDto';

export class CollaboratorTransportMap {

  public static toEntity(dto: CollaboratorTransportDto): CollaboratorTransport {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      type: dto.type,
      transportTypeId: dto.transportTypes.id,
      company: dto.company,
      line: dto.line,
      quantity: dto.quantity,
      value: dto.value,
      collaboratorTransportCardTypes: dto.collaboratorTransportCardTypes,
      updatedAt: dto.updatedAt,
      createdAt: dto.createdAt,
    }
  }

  public static toDto(entity: CollaboratorTransport): CollaboratorTransportDto {
    const transportTypes = new TransportTypes()
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      type: entity.type,
      transportTypes: transportTypes,
      company: entity.company,
      line: entity.line,
      quantity: entity.quantity,
      value: entity.value,
      updatedAt: entity.updatedAt,
      createdAt: entity.createdAt,
    }
  }
}