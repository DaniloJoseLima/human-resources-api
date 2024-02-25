import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('gender_types')
export class GenderTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
