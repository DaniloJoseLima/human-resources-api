import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('ethnicity_types')
export class EthnicityTypes {

  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
