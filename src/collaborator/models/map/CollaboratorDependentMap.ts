import { CollaboratorDependents } from '../../../shared/entities/CollaboratorDependents';
import { DependentTypes } from '../../../shared/entities/DependentTypes';
import { GenderTypes } from '../../../shared/entities/GenderTypes';
import { MaritalStatusTypes } from '../../../shared/entities/MaritalStatusTypes';
import { CollaboratorDependentsDto } from '../dto/CollaboratorDependentsDto';

export class CollaboratorDependentMap {

  public static toEntity(dto: CollaboratorDependentsDto): CollaboratorDependents {
    return {
      id: dto.id,
      collaboratorId: dto.collaboratorId,
      dependentTypeId: dto.dependentTypes.id,
      name: dto.name,
      birthDate: dto.birthDate,
      genderTypeId: dto.genderTypes.id,
      maritalStatusTypeId: dto.maritalStatusTypes.id,
      nameMother: dto.nameMother,
      nameFather: dto.nameFather,
      numberCpf: dto.numberCpf,
      numberRg: dto.numberRg,
      expeditionDate: dto.expeditionDate,
      expeditionUf: dto.expeditionUf,
      expeditionAgency: dto.expeditionAgency,
      irpfDependent: dto.irpfDependent
    }
  }

  public static toDto(entity: CollaboratorDependents): CollaboratorDependentsDto {
    const dependentTypes = new DependentTypes()
    const genderTypes = new GenderTypes()
    const maritalStatusTypes = new MaritalStatusTypes()
    return {
      id: entity.id,
      collaboratorId: entity.collaboratorId,
      dependentTypes: dependentTypes,
      name: entity.name,
      birthDate: entity.birthDate,
      genderTypes: genderTypes,
      maritalStatusTypes: maritalStatusTypes,
      nameMother: entity.nameMother,
      nameFather: entity.nameFather,
      numberCpf: entity.numberCpf,
      numberRg: entity.numberRg,
      expeditionDate: entity.expeditionDate,
      expeditionUf: entity.expeditionUf,
      expeditionAgency: entity.expeditionAgency,
      irpfDependent: entity.irpfDependent
    }
  }
}