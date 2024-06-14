import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { ProcessRepository } from '../../process.repository';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ProcessArchiveModule } from 'src/app/modules/archive/process-archive/process-archive.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
    ProcessArchiveModule,
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ProcessRepository],
})
export class ActivitiesModule {}
