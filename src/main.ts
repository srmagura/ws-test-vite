import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// @ts-ignore
if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(5173);
  }

  bootstrap();
}

export const viteNodeApp = NestFactory.create(AppModule);
