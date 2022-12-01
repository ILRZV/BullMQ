import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BullModule } from '@nestjs/bull';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
