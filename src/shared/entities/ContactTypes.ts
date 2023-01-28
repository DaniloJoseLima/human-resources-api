import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('contact_types')
export class ContactTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
