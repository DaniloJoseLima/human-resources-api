import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('transport_cards_types')
export class TransportCardTypes {

  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
