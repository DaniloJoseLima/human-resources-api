export interface CollaboratorContractDataDto {
  id: number;
  collaboratorId: string;
  remuneration: string,
  occupation: string,
  start: Date,
  end: Date,
  workingHours: string,
  comments: string,
  updatedAt?: Date,
  createdAt?: Date,
}
