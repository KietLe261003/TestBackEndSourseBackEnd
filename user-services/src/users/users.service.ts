import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = this.usersRepository.create(createUserDto)
    const savedUser = this.usersRepository.save(createdUser)
    return savedUser
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    console.log(id)
    const user = await this.usersRepository.findOne({
      where: {
        id: id
      }
    });
    console.log(user)
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
