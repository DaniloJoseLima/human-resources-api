import { CollaboratorAcademicFormation } from '../../../shared/entities/CollaboratorAcademicFormation';
import { CollaboratorCertification } from '../../../shared/entities/CollaboratorCertification';
import { CollaboratorFormation } from '../../../shared/entities/CollaboratorFormation';
import { SchoolingTypes } from '../../../shared/entities/SchoolingTypes';
import { CollaboratorProfessionalDataDto } from '../dto/CollaboratorProfessionalDataDto';

export class CollaboratorProfessionalDataMap {


  public static toDto(collaboratorFormation: CollaboratorFormation,
    academicFormation: CollaboratorAcademicFormation[],
    collaboratorCertification: CollaboratorCertification[]) {

      if(collaboratorFormation) {
        const schoolingTypeId = collaboratorFormation && collaboratorFormation.schoolingTypeId ? collaboratorFormation.schoolingTypeId : null
        const schoolingTypes = { id: schoolingTypeId } as SchoolingTypes
        return {
          id: collaboratorFormation.id,
          collaboratorId: collaboratorFormation.collaboratorId,
          schoolingTypes: schoolingTypes,
          formation: academicFormation,
          certification: collaboratorCertification

      } as CollaboratorProfessionalDataDto
    }
    return null
  }
}