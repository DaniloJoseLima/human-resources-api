
export interface CollaboratorBankDataDto {
  id: number;
  collaboratorId: string;
  name: string;
  agency: number;
  account: number;
  accountType: any;
  accountCategory: any;
  pixKey: string;
  pixKeyType: any;
  updatedAt?: Date;
  createdAt?: Date;
}
