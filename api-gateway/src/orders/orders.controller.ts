
import { Body, ConflictException, Controller, Inject, Post, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('ORDERING_SERVICE') private orderClient: ClientProxy,
    @Inject('USER_SERVICE') private userClient: ClientProxy,
  ) { }

  async getUser(id: number) {
    const currentUser = this.userClient.send('findOneUser', { id });
    return firstValueFrom(currentUser.pipe(
      map(user => {
        return user;
      })
    ));
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const user_id = createOrderDto.customer_id;
    console.log(user_id)
    const currentUser = await this.getUser(user_id);
    console.log(currentUser)
    if (!currentUser) throw new ConflictException('User not found')
    return this.orderClient.send('createOrder', createOrderDto)
  }
}

