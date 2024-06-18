// src/app.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getPort(): number {
    return this.configService.get<number>('PORT');
  }

  getMongoUri(): string {
    const mongoUri = this.configService.get<string>('DB_URI');
    if (!mongoUri) {
      throw new Error('DB_URI is not defined in environment variables');
    }
    return mongoUri;
  }
}
