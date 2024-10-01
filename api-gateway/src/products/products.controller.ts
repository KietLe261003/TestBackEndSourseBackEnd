import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCT_SERVICE') private client: ClientProxy,
  ) { }


  @Get('findAll')
  async getAll() {

    try {
      const result = this.client.send('findAll', {});
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
