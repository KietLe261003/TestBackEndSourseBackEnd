import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private client: ClientProxy,
  ) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.client.send('createUser', createUserDto)
  }
}
