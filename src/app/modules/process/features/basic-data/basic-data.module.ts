import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Process, ProcessSchema } from '../../process.schema';
import { ProcessRepository } from '../../process.repository';
import { BasicDataController } from './basic-data.controller';
import { BasicDataService } from './basic-data.service';
import { ProcessArchiveModule } from 'src/app/modules/archive/process-archive/process-archive.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [BasicDataController],
  providers: [BasicDataService, ProcessRepository],
})
export class BasicDataModule {}
