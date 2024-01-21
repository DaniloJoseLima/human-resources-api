import { CollaboratorTransportCardTypes } from "../../../shared/entities/CollaboratorTransportCardTypes";
import { TransportTypes } from "../../../shared/entities/TransportTypes";

export interface CollaboratorTransportDto {
  id: number;
  collaboratorId: string;
  type: string,
  transportTypes: TransportTypes,
  company: string,
  line: string,
  quantity: number,
  value: number,
  collaboratorTransportCardTypes?: CollaboratorTransportCardTypes[]
  transportCardType?: number[]
  updatedAt?: Date,
  createdAt?: Date,
}
