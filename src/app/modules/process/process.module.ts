import { Module } from '@nestjs/common';
import { ActivitiesModule } from './features/activities/activities.module';
import { BasicDataModule } from './features/basic-data/basic-data.module';
import { ControllerMonitoringModule } from './features/controller-and-monitoring/controller-and-monitoring.module';

@Module({
  imports: [ActivitiesModule, BasicDataModule, ControllerMonitoringModule],
})
export class ProcessModule {}
