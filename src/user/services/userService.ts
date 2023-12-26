import { UserDto } from './../models/dto/UserDto';
import { UserMap } from '../models/map/UserMap';
import { UserRepository } from '../repositories/userRepository';

export const UserService = {

  async create(name: string, email: string, password: string) {
    const user = await UserRepository.create(name, email, password)
    return user
  },

  async update(userDto: UserDto) {
    const user = UserMap.toEntity(userDto);
    const data = await UserRepository.update(user)
    return data
  },

  async findAll(field: string, q: string, pageNumber: number) {
    const data = await UserRepository.findAll(field, q, pageNumber) as any
    data.list = data.list.map((entity: any) => {
      return UserMap.toDto(entity)
    })
    return data
  },

  async find(id: string) {
    const data = await UserRepository.find(id) as any
    const dto = UserMap.toDto(data)
    return dto
  },
}