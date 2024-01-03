import { ContactTypes } from "../../../shared/entities/ContactTypes";

export interface CollaboratorContactsDto {
  id: number;
  collaboratorId: string;
  contactTypes: ContactTypes;
  phoneNumber: string;
  updatedAt: Date;
  createdAt: Date;
}
