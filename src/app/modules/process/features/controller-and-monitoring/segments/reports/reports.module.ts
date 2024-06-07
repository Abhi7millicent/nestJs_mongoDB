import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { WorkflowsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [WorkflowsController],
  providers: [ReportsService, ProcessRepository],
})
export class ReportsModule {}
