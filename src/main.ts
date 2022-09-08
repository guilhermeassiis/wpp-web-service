import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Sender } from './Whatsapp/Sender'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const sender = new Sender();
}
bootstrap();
