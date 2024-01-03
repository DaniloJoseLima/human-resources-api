import { AddressTypes } from "../../../shared/entities/AddressTypes";

export interface CollaboratorAddressDto {
  id: number;
  collaboratorId: string;
  addressTypes: AddressTypes;
  zipCode: string;
  place: string;
  number: string;
  complement: string;
  district: string;
  state: string;
  city: string;
  country: string;
}
