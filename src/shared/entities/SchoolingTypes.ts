import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('schooling_types')
export class SchoolingTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
