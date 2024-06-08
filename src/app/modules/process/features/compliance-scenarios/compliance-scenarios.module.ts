import { Module } from '@nestjs/common';
import { AuditTrailScenariosModule } from './segments/audit-trail/audit-trail.module';
import { ComplianceScenariosDataModule } from './segments/compliance-scenarios-data/compliance-scenarios-data.module';
@Module({
  imports: [AuditTrailScenariosModule, ComplianceScenariosDataModule],
})
export class ComplianceScenariosModule {}
