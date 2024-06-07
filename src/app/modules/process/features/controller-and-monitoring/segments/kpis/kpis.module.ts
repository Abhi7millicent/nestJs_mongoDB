import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { KPIsService } from './kpis.service';
import { KPIsController } from './kpis.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [KPIsController],
  providers: [KPIsService, ProcessRepository],
})
export class KPIsModule {}
