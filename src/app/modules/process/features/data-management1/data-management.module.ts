import { Module } from '@nestjs/common';
import { ProcessRepository } from '../../process.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { DataManagementService } from './data-management.service';
import { DataManagementController } from './data-management.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [DataManagementController],
  providers: [DataManagementService, ProcessRepository],
})
export class DataManagementModule {}
