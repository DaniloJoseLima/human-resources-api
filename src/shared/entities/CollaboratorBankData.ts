import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_bank_data')
export class CollaboratorBankData {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ name: 'collaborator_id'})
  collaboratorId: string;

  @Column({ name: 'name'})
  name: string;
  
  @Column({ name: 'agency'})
  agency: number;
  
  @Column({ name: 'account'})
  account: number;
  
  @Column({ name: 'account_type', type: 'enum', enum: ['savings','current'] })
  accountType: string;
  
  @Column({ name: 'account_category', type: 'enum', enum: ['pj','pf'] })
  accountCategory: string;
  
  @Column({ name: 'pix_key'})
  pixKey: string;
  
  @Column({ name: 'pix_key_type', type: 'enum', enum: ['telephone','email','cpf','cnpj','random'] })
  pixKeyType: string;
      
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt?: Date;

  @CreateDateColumn({ name: 'created_at'})
  createdAt?: Date;
  
}
