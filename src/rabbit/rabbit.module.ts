import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Config } from 'config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'api_service',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
})
export class RabbitModule { }
