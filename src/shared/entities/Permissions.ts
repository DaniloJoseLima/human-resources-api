import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity('permissions')
export class Permissions {
  
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'name_key' })
  nameKey: string;
  
  @Column()
  deprecated: boolean;  

}