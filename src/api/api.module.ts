import { Module } from '@nestjs/common';
import { RequestService } from './request/request.service';
import { Config } from 'config';
import { InfoService } from './info/info.service';
import { OrderService } from './order/order.service';

@Module({
  providers: [
    RequestService, 
    Config,
    InfoService,
    OrderService
  ]
})
export class ApiModule { }
