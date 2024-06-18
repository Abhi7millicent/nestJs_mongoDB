import { ApiProperty } from '@nestjs/swagger';

// Nested DTOs

class IoInfoDto {
  @ApiProperty({ example: '11' })
  inputs: string;

  @ApiProperty({ example: '11' })
  outputs: string;

  @ApiProperty({ example: '11' })
  business_outcome: string;

  @ApiProperty({ example: '11' })
  major_requirements: string;
}

class ActivityDto {
  @ApiProperty({ example: 'activity_m5eo8w181' })
  _id: string;

  @ApiProperty({ example: 1 })
  sr_no: number;

  @ApiProperty({ example: '1' })
  description: string;

  @ApiProperty({ example: '1' })
  performed_at: string;

  @ApiProperty({ example: '1' })
  performed_by: string;

  @ApiProperty({ example: '1' })
  performed_where: string;
}

class WorkflowDto {
  @ApiProperty({ example: 'wf_9r1xmc7uk' })
  _id: string;

  @ApiProperty({ example: '11' })
  title: string;

  @ApiProperty({ example: ['beginner'] })
  levels: string[];

  @ApiProperty({ example: ['beginner'] })
  roles: string[];

  @ApiProperty({ example: ['beginner'] })
  activity_id: string[];

  @ApiProperty({ example: ['beginner'] })
  automation_id: string[];

  @ApiProperty({ example: ['beginner'] })
  integration_scenario_id: string[];

  @ApiProperty({ example: '1' })
  description: string;

  @ApiProperty({ example: '1' })
  technology: string;
}

class KpiDto {
  @ApiProperty({ example: 'Monthly Sales Growth' })
  title: string;

  @ApiProperty({ example: 'Measures the monthly growth in sales revenue.' })
  description: string;

  @ApiProperty({
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
  })
  calculation_logic: string;

  @ApiProperty({ example: ['Medium'] })
  complexity_level: string[];

  @ApiProperty({ example: ['Sales Manager', 'Analyst'] })
  role: string[];

  @ApiProperty({ example: ['activity1', 'activity2'] })
  activity_id: string[];

  @ApiProperty({ example: ['test'] })
  value: string[];

  @ApiProperty({ example: 'test' })
  bench_mark: string;

  @ApiProperty({ example: 'kpis_3l251ajxa' })
  _id: string;
}

class ReportDto {
  @ApiProperty({ example: 'Report Financial Report' })
  title: string;

  @ApiProperty({
    example: 'A detailed report of the financial performance for the quarter.',
  })
  description: string;

  @ApiProperty({ example: ['financial-summary.pdf', 'charts.xlsx'] })
  attachments: string[];

  @ApiProperty({ example: ['High'] })
  complexity_level: string[];

  @ApiProperty({
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
  })
  calculation_logic: string;

  @ApiProperty({ example: ['Financial', 'Performance'] })
  type: string[];

  @ApiProperty({ example: ['Excel', 'PowerBI'] })
  application: string[];

  @ApiProperty({ example: ['ERP', 'Accounting System'] })
  source_data: string[];

  @ApiProperty({ example: ['Financial Analyst', 'CFO'] })
  role: string[];

  @ApiProperty({ example: ['activity1', 'activity2'] })
  activity_id: string[];

  @ApiProperty({ example: 'report_li2jrnnin' })
  _id: string;
}

class AnalyticalDashboardDto {
  @ApiProperty({ example: 'analytical Dashboard' })
  title: string;

  @ApiProperty({
    example: 'A comprehensive dashboard for sales analytics.',
  })
  description: string;

  @ApiProperty({
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
  })
  calculation_logic: string;

  @ApiProperty({ example: ['report.pdf', 'chart.png'] })
  attachments: string[];

  @ApiProperty({ example: ['High'] })
  complexity_level: string[];

  @ApiProperty({ example: ['Analytical', 'Strategic'] })
  type: string[];

  @ApiProperty({ example: ['PowerBI', 'Tableau'] })
  dashboard_application: string[];

  @ApiProperty({ example: ['CRM', 'ERP'] })
  source_data: string[];

  @ApiProperty({ example: ['Analyst', 'Manager'] })
  role: string[];

  @ApiProperty({ example: ['test', 'test2'] })
  application: string[];

  @ApiProperty({ example: ['activity1', 'activity2'] })
  activity_id: string[];

  @ApiProperty({ example: false })
  is_deleted: boolean;

  @ApiProperty({ example: 'ad_r5vnypwae' })
  _id: string;
}

class ControlAndMonitoringDto {
  @ApiProperty({ type: [WorkflowDto] })
  workflows: WorkflowDto[];

  @ApiProperty({ type: [KpiDto] })
  kpis: KpiDto[];

  @ApiProperty({ type: [ReportDto] })
  reports: ReportDto[];

  @ApiProperty({ type: [AnalyticalDashboardDto] })
  analytical_dashboards: AnalyticalDashboardDto[];
}

class QueryResponseDto {
  @ApiProperty({ example: 'What is NestJS?' })
  query: string;

  @ApiProperty({
    example: 'NestJS is a progressive Node.js framework.',
  })
  response: string;

  @ApiProperty({ example: 'qr_eas75e3zu' })
  _id: string;
}

class DataManagementDto {
  @ApiProperty({ example: '1234567890abcdef' })
  _id: string;

  @ApiProperty({ example: ['Data Management Example'] })
  mdo: string[];

  @ApiProperty({
    type: 'object',
    properties: {
      average_transactions_year: { type: 'string', example: '12000' },
      maximum_transactions_month: { type: 'string', example: '1500' },
      maximum_transactions_day: { type: 'string', example: '50' },
      average_line_items: { type: 'string', example: '10' },
    },
  })
  transaction_volumes: Record<string, string>;

  @ApiProperty({ example: 'High' })
  data_security: string;

  @ApiProperty({ example: '5 years' })
  data_retention: string;

  @ApiProperty({ example: 'USA' })
  data_residency: string;
}

class DocumentDto {
  @ApiProperty({ example: 'Sample Document Title' })
  title: string;

  @ApiProperty({
    example: 'This is a sample description of the document.',
  })
  desc: string;

  @ApiProperty({ example: ['type1', 'type2'] })
  type: string[];

  @ApiProperty({ example: ['source1', 'source2'] })
  source: string[];

  @ApiProperty({ example: '100-200' })
  number_range: string;

  @ApiProperty({ example: 'Store in a cool, dry place' })
  storage_requirements: string;

  @ApiProperty({ example: ['attachment1', 'attachment2'] })
  attachments: string[];

  @ApiProperty({ example: ['activity1', 'activity2'] })
  activity_id: string[];

  @ApiProperty({ example: false })
  is_deleted: boolean;

  @ApiProperty({ example: 'pd_kuclxi9j6' })
  _id: string;
}

class ComplianceScenarioDto {
  @ApiProperty({ example: 'GDPR Compliance 1' })
  title: string;

  @ApiProperty({
    example:
      'Scenario for reviewing and ensuring compliance with GDPR regulations.',
  })
  description: string;

  @ApiProperty({ example: ['file1.pdf', 'file2.docx', 'file3.xlsx'] })
  attachments: string[];

  @ApiProperty({ example: ['activity123', 'activity456', 'activity789'] })
  activity_id: string[];

  @ApiProperty({ example: ['automation123', 'automation456'] })
  automation_id: string[];

  @ApiProperty({
    example: ['integration123', 'integration456', 'integration789'],
  })
  integration_scenario_id: string[];

  @ApiProperty({ example: false })
  is_deleted: boolean;

  @ApiProperty({ example: 'cs_6fqzgve8u' })
  _id: string;
}

class ControlsDto {
  @ApiProperty({ example: 'Data Quality 1' })
  title: string;

  @ApiProperty({
    example: 'Ensure the quality and consistency of incoming data.',
  })
  description: string;

  @ApiProperty({ example: ['Act1'] })
  activity_id: string[];

  @ApiProperty({ example: ['mdo456'] })
  mdo_id: string[];

  @ApiProperty({ example: 'pc_64gl1z60x' })
  _id: string;
}

// Main DTO

export class UpdatedDataDto {
  @ApiProperty({ example: 'Audit' })
  process_area: string;

  @ApiProperty({ type: IoInfoDto })
  io_info: IoInfoDto;

  @ApiProperty({ type: [ActivityDto] })
  activity: ActivityDto[];

  @ApiProperty({ type: [ControlAndMonitoringDto] })
  control_and_monitoring: ControlAndMonitoringDto[];

  @ApiProperty({ type: [QueryResponseDto] })
  query_response: QueryResponseDto[];

  @ApiProperty({ type: [DataManagementDto] })
  data_management: DataManagementDto[];

  @ApiProperty({ type: [DocumentDto] })
  document: DocumentDto[];

  @ApiProperty({ type: [ComplianceScenarioDto] })
  compliance_scenario: ComplianceScenarioDto[];

  @ApiProperty({ type: [ControlsDto] })
  controls: ControlsDto[];

  @ApiProperty({ example: false })
  is_deleted: boolean;

  @ApiProperty({ example: 'Updated Data' })
  name: string;

  @ApiProperty({ example: '12345' })
  _id: string;
}

export class DeleteProcessErrorDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to delete basic process' })
  error: string;
}
