import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('address_types')
export class AddressTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
