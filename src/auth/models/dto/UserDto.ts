import { Permissions } from "../../../shared/entities/Permissions";

export interface UserDto {
  id: string;
  roleId: number;
  name: string;
  email: string;
  password?: string;
  isGoogle?: boolean;
  permissions: Array<Permissions>;
}