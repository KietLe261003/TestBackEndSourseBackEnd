

import { IsInt, IsNotEmpty, IsDecimal, IsString, IsDateString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  customer_id: number;

  @IsDateString()
  @IsNotEmpty()
  order_date: string;

  @IsDecimal()
  @IsNotEmpty()
  total_amount: number;

  @IsString()
  @IsNotEmpty()
  status: string;
}
