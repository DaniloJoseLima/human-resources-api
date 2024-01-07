import { DependentTypes } from "../../../shared/entities/DependentTypes";
import { GenderTypes } from "../../../shared/entities/GenderTypes";
import { MaritalStatusTypes } from "../../../shared/entities/MaritalStatusTypes";

export interface CollaboratorDependentsDto {
  id: number;
  collaboratorId: string;
  dependentTypes: DependentTypes;
  name: string;
  birthDate: Date;
  genderTypes: GenderTypes;
  maritalStatusTypes: MaritalStatusTypes;
  nameMother: string;
  nameFather: string;
  numberCpf: string;
  numberRg: string;
  expeditionDate: Date;
  expeditionUf: string;
  expeditionAgency: string;
  irpfDependent: boolean;
}
