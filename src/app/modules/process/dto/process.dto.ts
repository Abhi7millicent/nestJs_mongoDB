import { ApiProperty } from '@nestjs/swagger';

export class IoInfo {
  public inputs: string = '';
  public outputs: string = '';
  public business_outcome: string = '';
  public major_requirements: string = '';
}

class Transaction_volumes_data {
  public average_transactions_year: string = '';
  public maximum_transactions_month: string = '';
  public maximum_transactions_day: string = '';
  public average_line_items: string = '';
}

export class Activity {
  public _id: string = '';
  public sr_no: string = '';
  public description: string = '';
  public performed_at: string[] = [];
  public performed_by: string[] = [];
  public performed_where: string[] = [];
  public value_calculation_logic: string = '';
  public accounts_postings: string = '';
  public is_deleted: boolean = false;
}

export class Workflow {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public technology: string = '';
  public levels: string[] = [];
  public roles: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class Kpi {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public calculation_logic: string = '';
  public complexity_level: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public value: string[] = [];
  public bench_mark: string = '';
  public is_deleted: boolean = false;
}

export class Report {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public calculation_logic: string = '';
  public attachments: string[] = [];
  public complexity_level: string[] = [];
  public type: string[] = [];
  public application: string[] = [];
  public source_data: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AnalyticalDashboard {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public calculation_logic: string = '';
  public attachments: string[] = [];
  public application: string[] = [];
  public complexity_level: string[] = [];
  public type: string[] = [];
  public dashboard_application: string[] = [];
  public source_data: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class ProcessControlAndMonitoring {
  public workflows: Workflow[] = [];
  public kpis: Kpi[] = [];
  public reports: Report[] = [];
  public analytical_dashboards: AnalyticalDashboard[] = [];
}

export class QueriesAndResponses {
  public _id: string = '';
  public query: string = '';
  public response: string = '';
  public is_deleted: boolean = false;
}

export class DataManagementData {
  public _id: string;
  public mdo: string[] = [];
  public transaction_volumes: Transaction_volumes_data =
    new Transaction_volumes_data();
  public data_security: string;
  public data_retention: string;
  public data_residency: string;
}

export class IntegrationScenario {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public data_provider: string[] = [];
  public data_consumer: string[] = [];
  public api_provider: string[] = [];
  public calling_system: string[] = [];
  public type: string[] = [];
  public data_volume_year: string[] = [];
  public mode: string[] = [];
  public data_type: string[] = [];
  public protocol: string[] = [];
  public tool: string[] = [];
  public data_record_size: string = '';
  public yoy_data_growth: string = '';
  public data_provider_authentication: string = '';
  public data_consumer_authentication: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
}

export class ProcessDocument {
  public _id: string = '';
  public title: string = '';
  public desc: string = '';
  public type: string[] = [];
  public source: string[] = [];
  public number_range: string = '';
  public storage_requirements: string = '';
  public attachments: string[] = [];
  public activity_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AutomationScenario {
  public _id: string = '';
  public type: string = '';
  public title: string = '';
  public desc: string = '';
  public technology: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class ComplianceScenarioData {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public attachments: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AuditTrailScenarios {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public attachments: string[] = [];
  public integration_scenario_id: string[] = [];
  public role: string[] = [];
  public is_deleted: boolean = false;
}

export class ComplianceScenario {
  public compliance_scenario_data: ComplianceScenarioData[] = [];
  public audit_trail_scenarios: AuditTrailScenarios[] = [];
}

export class ProcessControl {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
  public is_deleted: boolean = false;
}

export class CreateProcessDto {
  public function_id: string[] = [];
  public sub_function_id: string[] = [];
  public title: string = '';
  public version_type: string = '';
  public version_id: string = '';
  public sop_reference: string = '';
  public owner_name: string = '';
  public owner_role_designation: string = '';
  public release_status: string = '';
  public description: string = '';
  public trigger: string = '';
  public created_by: string = '';
  public created_on: Date = new Date();
  public last_modified_by: string = '';
  public last_modified_on: Date = new Date();
  public is_deleted: boolean = false;
  public io_info: IoInfo = new IoInfo();
  public activities: Activity[] = [];
  public control_and_monitoring: ProcessControlAndMonitoring =
    new ProcessControlAndMonitoring();
  public queries_and_responses: QueriesAndResponses[] = [];
  public data_management: DataManagementData = new DataManagementData();
  public integration_scenario: IntegrationScenario = new IntegrationScenario();
  public documents: ProcessDocument[] = [];
  public automation_scenarios: AutomationScenario[] = [];
  public compliance_scenarios: ComplianceScenario = new ComplianceScenario();
  public controls: ProcessControl[] = [];
}

export class IoInfoDto {
  @ApiProperty({ description: 'Input information', example: '' })
  inputs: string;

  @ApiProperty({ description: 'Output information', example: '' })
  outputs: string;

  @ApiProperty({ description: 'Business outcome', example: '' })
  business_outcome: string;

  @ApiProperty({ description: 'Major requirements', example: '' })
  major_requirements: string;
}

export class ControlAndMonitoringDto {
  @ApiProperty({ description: 'Workflows', example: [] })
  workflows: any[];

  @ApiProperty({ description: 'KPIs', example: [] })
  kpis: any[];

  @ApiProperty({ description: 'Reports', example: [] })
  reports: any[];

  @ApiProperty({ description: 'Analytical dashboards', example: [] })
  analytical_dashboards: any[];
}

export class ComplianceScenariosDto {
  @ApiProperty({ description: 'Compliance scenario data', example: [] })
  compliance_scenario_data: any[];

  @ApiProperty({ description: 'Audit trail scenarios', example: [] })
  audit_trail_scenarios: any[];
}

export class TransactionVolumesDataDto {
  @ApiProperty({ description: 'Volume description', example: 'High' })
  volume_description: string;

  @ApiProperty({
    description: 'Volume details',
    example: 'Details about the volume',
  })
  volume_details: string;
}

export class DataManagementDto {
  @ApiProperty({ description: 'Data management ID', example: '' })
  _id: string;

  @ApiProperty({ description: 'MDO', example: '' })
  mdo: string[];

  @ApiProperty({
    description: 'Transaction volumes',
    type: TransactionVolumesDataDto,
    example: {
      volume_description: 'High',
      volume_details: 'Details about the volume',
    },
  })
  transaction_volumes: TransactionVolumesDataDto;

  @ApiProperty({ description: 'Data security', example: '' })
  data_security: string;

  @ApiProperty({ description: 'Data retention', example: '' })
  data_retention: string;

  @ApiProperty({ description: 'Data residency', example: '' })
  data_residency: string;
}

export class IntegrationScenarioDto {
  @ApiProperty({ description: 'Integration scenario ID', example: '' })
  _id: string;
}

export class CreateProcessDataDto {
  @ApiProperty({
    type: [String],
    description: 'Function identifiers',
    example: ['F004'],
  })
  function_id: string[];

  @ApiProperty({
    type: [String],
    description: 'Sub-function identifiers',
    example: ['SF004'],
  })
  sub_function_id: string[];

  @ApiProperty({
    description: 'Title of the process',
    example: 'Process Title',
  })
  title: string;

  @ApiProperty({ description: 'Type of the version', example: 'Final' })
  version_type: string;

  @ApiProperty({ description: 'Version identifier', example: 'v4.0' })
  version_id: string;

  @ApiProperty({ description: 'SOP reference number', example: 'SOP12675' })
  sop_reference: string;

  @ApiProperty({
    description: 'Name of the process owner',
    example: 'John Doe',
  })
  owner_name: string;

  @ApiProperty({
    description: 'Role designation of the process owner',
    example: 'Process Owner',
  })
  owner_role_designation: string;

  @ApiProperty({ description: 'Release status', example: 'Released' })
  release_status: string;

  @ApiProperty({
    description: 'Description of the process',
    example: 'Detailed description of the process.',
  })
  description: string;

  @ApiProperty({
    description: 'Description of the trigger event',
    example: 'Trigger event description',
  })
  trigger: string;

  @ApiProperty({ description: 'Creator of the process', example: 'Admin' })
  created_by: string;

  @ApiProperty({
    description: 'Creation date',
    example: new Date().toISOString(),
  })
  created_on: Date;

  @ApiProperty({ description: 'Last modified by', example: '' })
  last_modified_by: string;

  @ApiProperty({
    description: 'Last modified date',
    example: new Date().toISOString(),
  })
  last_modified_on: Date;

  @ApiProperty({ description: 'Deletion flag', example: false })
  is_deleted: boolean;

  @ApiProperty({ type: IoInfoDto, description: 'IO Information' })
  io_info: IoInfoDto;

  @ApiProperty({
    type: [Object],
    description: 'List of activities',
    example: [],
  })
  activities: any[];

  @ApiProperty({
    type: ControlAndMonitoringDto,
    description: 'Control and Monitoring',
  })
  control_and_monitoring: ControlAndMonitoringDto;

  @ApiProperty({
    type: [Object],
    description: 'Queries and responses',
    example: [],
  })
  queries_and_responses: any[];

  @ApiProperty({ type: DataManagementDto, description: 'Data management' })
  data_management: DataManagementDto;

  @ApiProperty({
    type: IntegrationScenarioDto,
    description: 'Integration scenario',
  })
  integration_scenario: IntegrationScenarioDto;

  @ApiProperty({
    type: [Object],
    description: 'List of documents',
    example: [],
  })
  documents: any[];

  @ApiProperty({
    type: [Object],
    description: 'Automation scenarios',
    example: [],
  })
  automation_scenarios: any[];

  @ApiProperty({
    type: ComplianceScenariosDto,
    description: 'Compliance scenarios',
  })
  compliance_scenarios: ComplianceScenariosDto;

  @ApiProperty({ type: [Object], description: 'Controls', example: [] })
  controls: any[];
}

// DTO for response body
export class CreateProcessResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 201 })
  statusCode: number;

  @ApiProperty({
    description: 'Flag indicating the success of the operation',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'Process created successfully',
  })
  message: string;

  @ApiProperty({ description: 'Data returned from the operation' })
  data: any;
}
