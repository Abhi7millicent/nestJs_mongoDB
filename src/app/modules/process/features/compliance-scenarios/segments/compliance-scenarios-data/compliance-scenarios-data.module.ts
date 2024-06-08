import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { ComplianceScenariosDataController } from './compliance-scenarios-data.controller';
import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [ComplianceScenariosDataController],
  providers: [ComplianceScenariosDataService, ProcessRepository],
})
export class ComplianceScenariosDataModule {}
