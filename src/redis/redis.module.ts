import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { Config } from 'config';

@Module({
  providers: [RedisService, Config]
})
export class RedisModule {}
