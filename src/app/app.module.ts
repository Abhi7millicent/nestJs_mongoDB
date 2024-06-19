import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import configurations from 'src/core/config/app.config';
import { Modules } from './modules/modules';
import { DatabaseConnection } from 'src/database/database.connection';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
      ignoreEnvFile: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule, DatabaseModule],
      useClass: DatabaseConnection,
      inject: [ConfigService],
    }),
    Modules,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
