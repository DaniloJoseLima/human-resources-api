import { User } from "../../../shared/entities/User"
import { UserDto } from "../dto/UserDto"


export class UserMap  {

  public static toEntity(userDto: UserDto): User {
    return {
      id: userDto.id,
      name: userDto.name,
      roleId: userDto.roles && userDto.roles.id ? userDto.roles.id : userDto.roleId,
      email: userDto.email,
      password: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  public static toDto(user: User): UserDto {

    const permissions = user.permissions ? JSON.parse(user.permissions) : []
    const roles = user.roles ? JSON.parse(user.roles) : undefined

    return {
      id: user.id,
      name: user.name,
      roleId: user.roleId,
      roleName: user.roleName,
      email: user.email,
      permissions: permissions,
      roles: roles,
    }
  }
}