import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessArchiveController } from './process-archive.controller';
import { ProcessArchive, ProcessArchiveSchema } from './process-archive.schema';
import { ProcessArchiveService } from './process-archive.service';
import { ProcessArchiveRepository } from './process-archive.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProcessArchive.name, schema: ProcessArchiveSchema },
    ]),
  ],
  controllers: [ProcessArchiveController],
  providers: [ProcessArchiveService, ProcessArchiveRepository],
  exports: [ProcessArchiveService],
})
export class ProcessArchiveModule {}
