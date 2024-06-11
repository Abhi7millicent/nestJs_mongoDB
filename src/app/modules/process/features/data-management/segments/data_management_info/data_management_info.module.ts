import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { DataManagementInfoController } from './data_management_info.controller';
import { DataManagementInfoService } from './data_management_info.service';
import { ProcessRepository } from 'src/app/modules/process/process.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [DataManagementInfoController],
  providers: [DataManagementInfoService, ProcessRepository],
})
export class DataManagementInfoModule {}
