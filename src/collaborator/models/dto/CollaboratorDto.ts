import { CollaboratorAddressDto } from "./CollaboratorAddressDto";
import { CollaboratorContactsDto } from "./CollaboratorContactsDto";
import { CollaboratorDocumentDto } from "./CollaboratorDocumentDto";

export interface CollaboratorDto {
  id: string;
  contractType: string;
  name: string;
  email: string;
  birthDate: Date;
  motherName: string;
  fatherName: string;
  nationality: string;
  naturalness: string;
  updatedAt: Date;
  createdAt: Date;
  maritalStatus?: any;
  ethnicity?: any;
  gender?: any;
  contract?: any;
  document?: Array<CollaboratorDocumentDto>
  contacts?: Array<CollaboratorContactsDto>
  address?: CollaboratorAddressDto

}
