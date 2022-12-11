import { BaseEntity } from './BaseEntity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
  
  @Column({ nullable: true,  type: "varchar",  length: 30})
  password: string;  


}
