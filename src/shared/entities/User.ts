import { BaseEntity } from './BaseEntity';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Permissions } from './Permissions';

@Entity('users')
export class User extends BaseEntity {
  
  @Column({ name: 'role_id'})
  roleId: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
  
  @Column({ nullable: true,  type: "varchar",  length: 30})
  password: string; 
  
  permissions?: any;
  roles?: any;
  roleName?: string;

}
