import { Module } from '@nestjs/common';
import { WorkflowModule } from './segments/workflow/workflow.module';
import { AnalyticalDashboardsModule } from './segments/analytical-dashboards/analytical-dashboards.module';
import { ReportsModule } from './segments/reports/reports.module';
import { KPIsModule } from './segments/kpis/kpis.module';
@Module({
  imports: [
    WorkflowModule,
    AnalyticalDashboardsModule,
    ReportsModule,
    KPIsModule,
  ],
})
export class ControllerMonitoringModule {}
