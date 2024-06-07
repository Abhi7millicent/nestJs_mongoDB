import { Module } from '@nestjs/common';
import { ProcessDocumentService } from './process-document.service';
import { ProcessDocumentController } from './process-document.controller';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [ProcessDocumentController],
  providers: [ProcessDocumentService, ProcessRepository],
})
export class ProcessDocumentModule { }
