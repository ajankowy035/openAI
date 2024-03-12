import { ConfigProvider } from '@config/configProvider';
import { Injectable } from '@nestjs/common';
import OpenAIApi from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAIApi;

  constructor() {
    this.openai = new OpenAIApi({
      apiKey: ConfigProvider.openAiKey,
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  async generateImageVariation(file: Buffer) {
    const blob = new Blob([file], { type: 'image' });
    const imageFile = new File([file], 'filename.jpg', {
      lastModified: Date.now(),
    });

    const formData = new FormData();
    formData.append('image', blob);

    try {
      const response = await this.openai.images.createVariation({
        image: imageFile,
        size: '256x256',
        response_format: 'url',
      });
      return response.data[0].url;
    } catch (error) {
      throw new Error(error);
    }
  }
}
