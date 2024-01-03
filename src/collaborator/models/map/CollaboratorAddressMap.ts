import { CollaboratorAddressDto } from '../dto/CollaboratorAddressDto';
import { CollaboratorAddresses } from '../../../shared/entities/CollaboratorAddresses';
import { AddressTypes } from '../../../shared/entities/AddressTypes';

export class CollaboratorAddressMap {

  public static toEntity(collaboratorAddressDto: CollaboratorAddressDto): CollaboratorAddresses {
    return {
      id: collaboratorAddressDto.id,
      collaboratorId: collaboratorAddressDto.collaboratorId,
      addressTypeId: collaboratorAddressDto.addressTypes.id,
      zipCode: collaboratorAddressDto.zipCode,
      place: collaboratorAddressDto.place,
      number: collaboratorAddressDto.number,
      complement: collaboratorAddressDto.complement,
      district: collaboratorAddressDto.district,
      state: collaboratorAddressDto.state,
      city: collaboratorAddressDto.city,
      country: collaboratorAddressDto.country,
    }
  }

  public static toDto(collaboratorAddress: CollaboratorAddresses): CollaboratorAddressDto {
    const addressTypes = new AddressTypes()
    return {
      id: collaboratorAddress.id,
      collaboratorId: collaboratorAddress.collaboratorId,
      addressTypes: addressTypes,
      zipCode: collaboratorAddress.zipCode,
      place: collaboratorAddress.place,
      number: collaboratorAddress.number,
      complement: collaboratorAddress.complement,
      district: collaboratorAddress.district,
      state: collaboratorAddress.state,
      city: collaboratorAddress.city,
      country: collaboratorAddress.country,
    }
  }
}