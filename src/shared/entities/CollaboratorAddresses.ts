import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('collaborator_addresses')
export class CollaboratorAddresses {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'collaborator_id'})
  collaboratorId: string;

  @Column({ name: 'address_type_id'})
  addressTypeId: number;

  @Column({ name: 'zip_code'})
  zipCode: string;

  @Column({ name: 'place'})
  place: string;

  @Column({ name: 'number'})
  number: string;

  @Column({ name: 'complement'})
  complement: string;

  @Column({ name: 'district'})
  district: string;

  @Column({ name: 'state'})
  state: string;

  @Column({ name: 'city'})
  city: string;

  @Column({ name: 'country'})
  country: string;
  
}
