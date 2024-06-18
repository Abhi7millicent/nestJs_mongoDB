import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AppConfig } from 'src/core/config/app.config';
// import { DatabaseConfig } from 'src/database/database.config';
import { Modules } from './modules/modules';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from 'src/core/config/configurations';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/database/database.connection';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
      ignoreEnvFile: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConnection,
      inject: [ConfigService],
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: DatabaseConfig,
    //   inject: [AppConfig],
    // }),
    Modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
