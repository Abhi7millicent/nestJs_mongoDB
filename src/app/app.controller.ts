// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/port')
  getPort(): number {
    return this.appService.getPort();
  }

  @Get('/mongo-uri')
  getMongoUri(): string {
    const mongoUri = this.appService.getMongoUri();
    console.log('mongoUri:', mongoUri);
    if (!mongoUri) {
      throw new Error('DB_URI is not defined in environment variables');
    }
    return mongoUri;
  }
}
