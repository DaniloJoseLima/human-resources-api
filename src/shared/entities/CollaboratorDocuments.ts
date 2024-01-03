import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_documents')
export class CollaboratorDocuments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'document_type_id'})
  documentTypeId: number;

  @Column({ name: 'collaborator_id'})
  collaboratorId: string;

  @Column({ name: 'document_number'})
  documentNumber: string;

  @Column({ name: 'expedition_date'})
  expeditionDate: Date;

  @Column({ name: 'expedition_uf'})
  expeditionUf: string;

  @Column({ name: 'expedition_agency'})
  expeditionAgency: string;

  @Column({ name: 'series'})
  series: string;

  @Column({ name: 'zone'})
  zone: string;

  @Column({ name: 'session'})
  session: string;

  @Column({ name: 'city'})
  city: string;
  
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
}
