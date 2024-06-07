import { Module } from '@nestjs/common';
import { ProcessControlsService } from './process-controls.service';
import { ProcessControlsController } from './process-controls.controller';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [ProcessControlsController],
  providers: [ProcessControlsService, ProcessRepository],
})
export class ProcessControlsModule { }
