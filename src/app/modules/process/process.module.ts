import { Module } from '@nestjs/common';
import { ActivitiesModule } from './features/activities/activities.module';
import { BasicDataModule } from './features/basic-data/basic-data.module';
import { WorkflowModule } from './features/controller-and-monitoring/segments/workflow/workflow.module';

@Module({
  imports: [ActivitiesModule, BasicDataModule, WorkflowModule],
})
export class ProcessModule {}
