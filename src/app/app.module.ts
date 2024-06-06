import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from 'src/config/app.config';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseConfig } from 'src/database/database.config';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
      inject: [AppConfig],
    }),
    ModulesModule,
  ],
  // controllers: [],
  providers: [DatabaseConfig],
})
export class AppModule {}
