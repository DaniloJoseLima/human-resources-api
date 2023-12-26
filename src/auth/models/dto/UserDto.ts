import { Permissions } from "../../../shared/entities/Permissions";

export interface UserDto {
  id: string;
  roleId: number;
  name: string;
  email: string;
  permissions: Array<Permissions>;
}