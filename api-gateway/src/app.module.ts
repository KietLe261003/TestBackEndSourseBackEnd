import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002
        }
      },
      {
        name: 'ORDERING_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3003
        }
      }
    ])
  ],
  controllers: [AppController, ProductsController, UsersController, OrdersController],
  providers: [AppService],
})
export class AppModule { }
