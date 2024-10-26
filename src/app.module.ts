import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { Config } from 'config';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { RabbitModule } from './rabbit/rabbit.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    RabbitModule,
  ],
  controllers: [],
  providers: [
    Config
  ],
  exports: [
    Config
  ]
})
export class AppModule { }
