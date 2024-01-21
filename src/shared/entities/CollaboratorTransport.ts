import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { TransportCardTypes } from './TransportCardTypes';
import { CollaboratorTransportCardTypes } from './CollaboratorTransportCardTypes';

@Entity('collaborator_transport')
export class CollaboratorTransport {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ name: 'collaborator_id' })
  collaboratorId: string;
  
  @Column({ name: 'type' })
  type: string;
  
  @Column({ name: 'transport_type_id' })
  transportTypeId: number;
  
  @Column({ name: 'company' })
  company: string;
  
  @Column({ name: 'line' })
  line: string;
  
  @Column({ name: 'quantity' })
  quantity: number;
  
  @Column({ name: 'value' })
  value: number;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  collaboratorTransportCardTypes?: CollaboratorTransportCardTypes[]

}
