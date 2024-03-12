import { Controller, Get, UseInterceptors, Post } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OpenAIService } from '@domain/openAI';

@Controller()
export class AppController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Get()
  getHello(): string {
    return this.openAIService.getHello();
  }

  @Post('/variations')
  @UseInterceptors(FileInterceptor('file'))
  getImageVariations(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<string> {
    return this.openAIService.generateImageVariation(file.buffer);
  }
}
