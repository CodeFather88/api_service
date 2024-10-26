import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://192.168.31.79:5672'],
      // queue: 'cats_queue',
      // queueOptions: {
      //   durable: false
      // },
    },
  });
  await app.listen();
}
bootstrap();
