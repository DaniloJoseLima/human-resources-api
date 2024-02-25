import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_contacts')
export class CollaboratorContacts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id'})
  collaboratorId: string;

  @Column({ name: 'contact_type_id'})
  contactTypeId: number;

  @Column({ name: 'phone_number'})
  phoneNumber: string;
  
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
  
}
