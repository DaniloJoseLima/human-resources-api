import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('dependent_types')
export class DependentTypes {

  @PrimaryColumn()
  id: number;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
