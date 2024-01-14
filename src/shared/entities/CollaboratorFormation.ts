import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_formation')
export class CollaboratorFormation {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id' })
  collaboratorId: string;

  @Column({ name: 'schooling_type_id' })
  schoolingTypeId: number;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

}
