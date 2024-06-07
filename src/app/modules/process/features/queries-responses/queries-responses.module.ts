import { Module } from '@nestjs/common';
import { QueriesResponsesService } from './queries-responses.service';
import { QueriesResponsesController } from './queries-responses.controller';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [QueriesResponsesController],
  providers: [QueriesResponsesService, ProcessRepository],
})
export class QueriesResponsesModule { }
