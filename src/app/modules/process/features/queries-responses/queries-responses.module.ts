import { Module } from '@nestjs/common';
import { QueriesResponsesService } from './queries-responses.service';
import { QueriesResponsesController } from './queries-responses.controller';
import { ProcessBasicDataRepository } from '../../process.repository';

@Module({
  controllers: [QueriesResponsesController],
  providers: [QueriesResponsesService, ProcessBasicDataRepository],
})
export class QueriesResponsesModule { }
