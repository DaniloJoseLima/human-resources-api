import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_certification')
export class CollaboratorCertification {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id' })
  collaboratorId: string;

  @Column({ name: 'name' })
  name: string;
  
  @Column({ name: 'number' })
  number: string;
  
  @Column({ name: 'institution' })
  institution: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

}
