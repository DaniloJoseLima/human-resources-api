import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('transport_types')
export class TransportTypes {

  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
