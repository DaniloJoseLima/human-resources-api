import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_dependents')
export class CollaboratorDependents {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ name: 'collaborator_id'})
  collaboratorId: string;

  @Column({ name: 'dependent_type_id'})
  dependentTypeId: number;
  
  @Column({ name: 'name'})
  name: string;
  
  @Column({ name: 'birth_date'})
  birthDate: Date;
  
  @Column({ name: 'gender_type_id'})
  genderTypeId: number;
  
  @Column({ name: 'marital_status_type_id'})
  maritalStatusTypeId: number;
  
  @Column({ name: 'name_mother'})
  nameMother: string;
  
  @Column({ name: 'name_father'})
  nameFather: string;
  
  @Column({ name: 'number_cpf'})
  numberCpf: string;
  
  @Column({ name: 'number_rg'})
  numberRg: string;
  
  @Column({ name: 'expedition_date'})
  expeditionDate: Date;
  
  @Column({ name: 'expedition_uf'})
  expeditionUf: string;
  
  @Column({ name: 'expedition_agency'})
  expeditionAgency: string;
  
  @Column({ name: 'irpf_dependent'})
  irpfDependent: boolean;
    
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at'})
  createdAt?: Date;
  
}
