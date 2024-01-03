import { CollaboratorContactsDto } from './../dto/CollaboratorContactsDto';
import { CollaboratorContacts } from '../../../shared/entities/CollaboratorContacts';
import { ContactTypes } from '../../../shared/entities/ContactTypes';

export class CollaboratorContactMap {

  public static toEntity(collaboratorContactsDto: CollaboratorContactsDto): CollaboratorContacts {
    return {
      id: collaboratorContactsDto.id,
      collaboratorId: collaboratorContactsDto.collaboratorId,
      contactTypeId: collaboratorContactsDto.contactTypes.id,
      phoneNumber: collaboratorContactsDto.phoneNumber,
      updatedAt: collaboratorContactsDto.updatedAt,
      createdAt: collaboratorContactsDto.createdAt,
    }
  }

  public static toDto(collaboratorContacts: CollaboratorContacts): CollaboratorContactsDto {
    const contactTypes = new ContactTypes()
    return {
      id: collaboratorContacts.id,
      collaboratorId: collaboratorContacts.collaboratorId,
      contactTypes: contactTypes,
      phoneNumber: collaboratorContacts.phoneNumber,
      updatedAt: collaboratorContacts.updatedAt,
      createdAt: collaboratorContacts.createdAt,
    }
  }
}