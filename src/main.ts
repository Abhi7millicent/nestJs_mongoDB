import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { setupRedoc } from './core/middlewares/redoc.middleware';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config();

  const options = new DocumentBuilder()
    .setTitle('CVS-BPM')
    .setDescription('SAP APIS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  setupRedoc(app);

  app.enableCors();
  await app.listen(3236);
}
bootstrap();
