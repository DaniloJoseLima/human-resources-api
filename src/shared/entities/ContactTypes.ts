import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('contact_types')
export class ContactTypes {

  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
