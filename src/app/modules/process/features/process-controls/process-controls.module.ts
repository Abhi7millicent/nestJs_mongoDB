import { Module } from '@nestjs/common';
import { ProcessControlsService } from './process-controls.service';
import { ProcessControlsController } from './process-controls.controller';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { ProcessArchiveModule } from 'src/app/modules/archive/process-archive/process-archive.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
    ProcessArchiveModule,
  ],
  controllers: [ProcessControlsController],
  providers: [ProcessControlsService, ProcessRepository],
})
export class ProcessControlsModule {}
