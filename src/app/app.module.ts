import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfig } from 'src/config/app.config';
import { ConfigModule } from 'src/config/config.module';
import { DatabaseConfig } from 'src/database/database.config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
      inject: [AppConfig],
    }),
  ],
  // controllers: [],
  providers: [DatabaseConfig],
})
export class AppModule {}