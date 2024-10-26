import { Module } from '@nestjs/common';
import { RequestService } from './request/request.service';
import { Config } from 'config';
import { InfoService } from './info/info.service';
import { OrderService } from './order/order.service';
import { RedisService } from 'src/redis/redis.service';
import { InfoController } from './info/info.controller';

@Module({
  providers: [
    RequestService,
    Config,
    InfoService,
    OrderService,
    RedisService
  ],
  controllers: [
    InfoController
  ]
})
export class ApiModule { }
