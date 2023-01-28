export interface CollaboratorDto {
  id: string;
  contractType: string;
  name: string;
  email: string;
  birthDate: Date;
  motherName: string;
  fatherName: string;
  nationality: string;
  naturalness: string;
  updatedAt: Date;
  createdAt: Date;
  maritalStatus?: object;
  ethnicityType?: object;
  gender?: object;
  contract?: object;

}
