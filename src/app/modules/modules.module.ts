import { Module } from '@nestjs/common';
import { ActivitiesModule } from './process/features/activities/activities.module';
import { BasicDataModule } from './process/features/basic-data/basic-data.module';
import { WorkflowModule } from './process/features/controller-and-monitoring/segments/workflow/workflow.module';

@Module({
  imports: [ActivitiesModule, BasicDataModule, WorkflowModule],
})
export class ModulesModule {}
