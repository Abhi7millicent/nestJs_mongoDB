import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from 'src/config/app.config';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseConfig } from 'src/database/database.config';
import { Modules } from './modules/modules';
import { ProcessDocumentModule } from './modules/process/features/process-document/process-document.module';
import { QueriesResponsesModule } from './modules/process/features/queries-responses/queries-responses.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule, ProcessDocumentModule, QueriesResponsesModule],
      useClass: DatabaseConfig,
      inject: [AppConfig],
    }),
    Modules,
  ],
  // controllers: [],
  providers: [DatabaseConfig],
})
export class AppModule { }
