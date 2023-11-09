import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // If set to true validator will strip validated object of any properties that do not have any decorators.
  app.useLogger(app.get(Logger));
  await app.listen(3001);
}

bootstrap();
