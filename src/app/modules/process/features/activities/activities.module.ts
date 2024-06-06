import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { ProcessRepository } from '../../process.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ProcessRepository],
})
export class ActivitiesModule {}
