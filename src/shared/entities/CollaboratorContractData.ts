import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_contract_data')
export class CollaboratorContractData {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id' })
  collaboratorId: string;

  @Column({ name: 'remuneration' })
  remuneration: string;

  @Column({ name: 'occupation' })
  occupation: string;

  @Column({ name: 'start' })
  start: Date;

  @Column({ name: 'end' })
  end: Date;

  @Column({ name: 'working_hours' })
  workingHours: string;

  @Column({ name: 'comments' })
  comments: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

}
