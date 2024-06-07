import { Module } from '@nestjs/common';
import { ProcessDocumentService } from './process-document.service';
import { ProcessDocumentController } from './process-document.controller';
import { ProcessBasicDataRepository } from '../../process.repository';

@Module({
  controllers: [ProcessDocumentController],
  providers: [ProcessDocumentService, ProcessBasicDataRepository],
})
export class ProcessDocumentModule { }
