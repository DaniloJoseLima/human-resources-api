import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_company_data')
export class CollaboratorCompanyData  {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id' })
  collaboratorId: string;

  @Column({ name: 'corporate_name' })
  corporateName: string;

  @Column({ name: 'fantasy_name' })
  fantasyName: string;

  @Column({ name: 'cnpj' })
  cnpj: string;

  @Column({ name: 'state_registration' })
  stateRegistration: string;

  @Column({ name: 'municipal_registration' })
  municipalRegistration: string;

  @Column({ name: 'main_activity' })
  mainActivity: number;

  @Column({ name: 'secondary_activity' })
  secondaryActivity: number;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}
