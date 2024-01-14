import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_academic_formation')
export class CollaboratorAcademicFormation {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id' })
  collaboratorId: string;

  @Column({ name: 'course' })
  course: string;
  
  @Column({ name: 'institution' })
  institution: string;
  
  @Column({ name: 'period' })
  period: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

}
