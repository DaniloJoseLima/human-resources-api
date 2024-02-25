import { CollaboratorAcademicFormation } from "../../../shared/entities/CollaboratorAcademicFormation";
import { CollaboratorCertification } from "../../../shared/entities/CollaboratorCertification";
import { SchoolingTypes } from "../../../shared/entities/SchoolingTypes";

export interface CollaboratorProfessionalDataDto {
  id: number;
  collaboratorId: string;
  schoolingTypes: SchoolingTypes,
  formation?: CollaboratorAcademicFormation[]
  certification?: CollaboratorCertification[]
}
