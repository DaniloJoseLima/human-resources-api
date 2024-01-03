import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

export class BaseEntity {

  @PrimaryColumn()
  id: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: Date;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
  
}
