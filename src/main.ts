import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function start() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  console.log(`Server started on ${port}`);
}
start();
