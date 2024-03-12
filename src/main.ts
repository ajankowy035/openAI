import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigProvider } from '@config/configProvider';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const PORT = ConfigProvider.port;
  await app.listen(PORT, () => {
    Logger.log(`Server is starting on http://localhost:${PORT}`);
  });
}

bootstrap();
