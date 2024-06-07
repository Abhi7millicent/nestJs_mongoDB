import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { Process, ProcessSchema } from 'src/app/modules/process/process.schema';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { AnalyticalDashboardsController } from './analytical-dashboards.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }]),
  ],
  controllers: [AnalyticalDashboardsController],
  providers: [AnalyticalDashboardsService, ProcessRepository],
})
export class AnalyticalDashboardsModule {}
