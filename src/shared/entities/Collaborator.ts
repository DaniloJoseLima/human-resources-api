import { BaseEntity } from './BaseEntity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborators')
export class Collaborator extends BaseEntity {

  @Column({ name: 'contract_type'})
  contractType: string;

  @Column({ name: 'name'})
  name: string;

  @Column({ name: 'email'})
  email: string;

  @Column({ name: 'birth_date'})
  birthDate: Date;

  @Column({ name: 'mother_name'})
  motherName: string;

  @Column({ name: 'father_name'})
  fatherName: string;

  @Column({ name: 'nationality'})
  nationality: string;

  @Column({ name: 'naturalness'})
  naturalness: string;

  @Column({ name: 'marital_status_type_id'})
  maritalStatusTypeId: number;

  @Column({ name: 'ethnicity_type_id'})
  ethnicityTypeId: number;

  @Column({ name: 'gender_type_id'})
  genderTypeId: number;

  maritalStatus?: any;
  ethnicity?: any;
  gender?: any;
  contract?: any;
}
