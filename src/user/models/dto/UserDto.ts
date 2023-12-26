import { Permissions } from "../../../shared/entities/Permissions";
import { Roles } from "../../../shared/entities/Roles";

export interface UserDto {
  id: string;
  roleId: number;
  name: string;
  email: string;
  permissions: Array<Permissions>;
  roles: Roles;
}