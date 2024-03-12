import { Module } from '@nestjs/common';
import { AppController } from '@http-app/app.controller';
import { AppService } from '@domain/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
