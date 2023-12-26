import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('roles')
export class Roles {

  @PrimaryColumn()
  id: number;

  @Column({ name: 'name_key', type: 'varchar',  length: 100})
  nameKey: string;

  @Column({ type: 'varchar',  length: 255})
  name: string;

  @Column({})
  deprecated: boolean;

  @Column({name: 'created_at'})
  createdAt: Date;

  @Column({name: 'updated_at'})
  updatedAt: Date;

}
