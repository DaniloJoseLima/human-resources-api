import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('documents_types')
export class DocumentsTypes {

  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar",  length: 100})
  name: string;

}
