import { CollaboratorDocuments } from "../../../shared/entities/CollaboratorDocuments";
import { DocumentsTypes } from "../../../shared/entities/DocumentsTypes";
import { CollaboratorDocumentDto } from "../dto/CollaboratorDocumentDto";

export class CollaboratorDocumentMap {

  public static toEntity(collaboratorDocumentDto: CollaboratorDocumentDto): CollaboratorDocuments {
    return {
      id: collaboratorDocumentDto.id,
      documentTypeId: collaboratorDocumentDto.documentType.id,
      collaboratorId: collaboratorDocumentDto.collaboratorId,
      documentNumber: collaboratorDocumentDto.documentNumber,
      expeditionDate: collaboratorDocumentDto.expeditionDate,
      expeditionUf: collaboratorDocumentDto.expeditionUf,
      expeditionAgency: collaboratorDocumentDto.expeditionAgency,
      series: collaboratorDocumentDto.series,
      zone: collaboratorDocumentDto.zone,
      session: collaboratorDocumentDto.session,
      city: collaboratorDocumentDto.city,
      updatedAt: collaboratorDocumentDto.updatedAt,
      createdAt: collaboratorDocumentDto.createdAt,
    }
  }

  public static toDto(collaboratorDocuments: CollaboratorDocuments): CollaboratorDocumentDto {
    const documentType = new DocumentsTypes()
    return {
      id: collaboratorDocuments.id,
      documentType: documentType,
      collaboratorId: collaboratorDocuments.collaboratorId,
      documentNumber: collaboratorDocuments.documentNumber,
      expeditionDate: collaboratorDocuments.expeditionDate,
      expeditionUf: collaboratorDocuments.expeditionUf,
      expeditionAgency: collaboratorDocuments.expeditionAgency,
      series: collaboratorDocuments.series,
      zone: collaboratorDocuments.zone,
      session: collaboratorDocuments.session,
      city: collaboratorDocuments.city,
      updatedAt: collaboratorDocuments.updatedAt,
      createdAt: collaboratorDocuments.createdAt,
    }
  }
}