import { DocumentsTypes } from "../../../shared/entities/DocumentsTypes";

export interface CollaboratorDocumentDto {
  id: number;
  documentType: DocumentsTypes;
  collaboratorId: string;
  documentNumber: string;
  expeditionDate: Date;
  expeditionUf: string;
  expeditionAgency: string;
  series: string;
  zone: string;
  session: string;
  city: string;
  updatedAt: Date;
  createdAt: Date;
}
