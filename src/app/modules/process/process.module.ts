import { Module } from '@nestjs/common';
import { ActivitiesModule } from './features/activities/activities.module';
import { BasicDataModule } from './features/basic-data/basic-data.module';
import { ControllerMonitoringModule } from './features/controller-and-monitoring/controller-and-monitoring.module';
import { ProcessDocumentModule } from './features/process-document/process-document.module';
import { QueriesResponsesModule } from './features/queries-responses/queries-responses.module';

@Module({
  imports: [
    ActivitiesModule,
    BasicDataModule,
    ControllerMonitoringModule,
    ProcessDocumentModule,
    QueriesResponsesModule,
  ],
})
export class ProcessModule {}
