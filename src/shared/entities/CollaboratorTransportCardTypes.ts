import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { CollaboratorTransport } from './CollaboratorTransport';

@Entity('collaborator_transport_cards_types')
export class CollaboratorTransportCardTypes {

  @PrimaryColumn({ name: 'collaborator_transport_id' })
  @JoinColumn({ name: "collaborator_transport_id" })
  @ManyToOne(type => CollaboratorTransport, { cascade: false , nullable: false})
  collaboratorTransportId: number;

  @PrimaryColumn({ name: 'transport_cards_types_id' })
  transportCardsTypesId: number;
  
}
