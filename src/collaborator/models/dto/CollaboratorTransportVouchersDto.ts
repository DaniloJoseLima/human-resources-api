import { CollaboratorTransportDto } from "./CollaboratorTransportDto";

export interface CollaboratorTransportVouchersDto {
  typeTransportOneWay: CollaboratorTransportDto[],
  typeTransportReturn: CollaboratorTransportDto[],
}
