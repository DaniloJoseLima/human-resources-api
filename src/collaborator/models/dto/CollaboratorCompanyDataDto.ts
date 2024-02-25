import { CollaboratorTransportDto } from "./CollaboratorTransportDto";

export interface CollaboratorCompanyDataDto {
  id: number;
  collaboratorId: string;
  corporateName: string;
  fantasyName: string;
  cnpj: string;
  stateRegistration: string;
  municipalRegistration: string;
  mainActivity: number;
  secondaryActivity: number;
  updatedAt?: Date;
  createdAt?: Date;
}
