import { User } from "../../../shared/entities/User"
import { UserDto } from "../dto/UserDto"


export class UserMap  {

  public static toEntity(userDto: UserDto): User {
    return {
      id: userDto.id,
      name: userDto.name,
      roleId: userDto.roleId,
      email: userDto.email,
      password: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  public static toDto(user: User): UserDto {

    const permissions = user.permissions ? JSON.parse(user.permissions) : []

    return {
      id: user.id,
      name: user.name,
      roleId: user.roleId,
      email: user.email,
      permissions: permissions
    }
  }
}