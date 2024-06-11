import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { MDOController } from './master_data_objects.controller';
import { MDOService } from './master_data_objects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [MDOController],
  providers: [MDOService, ProcessRepository],
})
export class MDOModule {}
