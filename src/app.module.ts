import { Module } from '@nestjs/common';
import { AppController } from '@http-app/app.controller';
import { OpenAIService } from '@domain/openAI';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [OpenAIService],
})
export class AppModule {}
