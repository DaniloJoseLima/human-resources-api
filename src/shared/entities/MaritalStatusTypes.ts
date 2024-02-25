import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('marital_status_types')
export class MaritalStatusTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
