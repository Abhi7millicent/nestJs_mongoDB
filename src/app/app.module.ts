import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from 'src/config/app.config';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseConfig } from 'src/database/database.config';
import { ProcessDocumentModule } from './modules/process/features/process-document/process-document.module';
import { QueriesResponsesModule } from './modules/process/features/queries-responses/queries-responses.module';
import { ProcessBasicDataRepository } from './modules/process/process.repository';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule, ProcessDocumentModule, QueriesResponsesModule],
      useClass: DatabaseConfig,
      inject: [AppConfig],
    }),
  ],
  // controllers: [],
  providers: [DatabaseConfig, ProcessBasicDataRepository],
})
export class AppModule { }