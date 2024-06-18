// update-integration-scenario.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateIntegrationScenarioDto {
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  data_provider: string[];

  @IsString()
  data_consumer: string[];

  @IsString()
  api_provider: string[];

  @IsString()
  calling_system: string[];

  @IsString()
  type: string[];

  @IsString()
  data_volume_year: string[];

  @IsString()
  mode: string[];

  @IsString()
  data_type: string[];

  @IsString()
  protocol: string[];

  @IsString()
  tool: string[];

  @IsString()
  data_record_size: string;

  @IsString()
  yoy_data_growth: string;

  @IsString()
  data_provider_authentication: string;

  @IsString()
  data_consumer_authentication: string;

  @IsString()
  activity_id: string[];

  @IsString()
  mdo_id: string[];

  @IsString()
  last_modified_by: string;
}

export class UpdateIntegrationScenarioDataDto {
  @ApiProperty({ type: String, example: '666d417093b9df8f829b22a3' })
  _id: string;

  @ApiProperty({ type: String, example: 'Integration Scenario Title' })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Description of the integration scenario.',
  })
  description: string;

  @ApiProperty({ type: [String], example: ['Provider1', 'Provider2'] })
  data_provider: string[];

  @ApiProperty({ type: [String], example: ['Consumer1', 'Consumer2'] })
  data_consumer: string[];

  @ApiProperty({ type: [String], example: ['APIProvider1', 'APIProvider2'] })
  api_provider: string[];

  @ApiProperty({ type: [String], example: ['System1', 'System2'] })
  calling_system: string[];

  @ApiProperty({ type: [String], example: ['Type1', 'Type2'] })
  type: string[];

  @ApiProperty({ type: [String], example: ['1000GB', '2000GB'] })
  data_volume_year: string[];

  @ApiProperty({ type: [String], example: ['Mode1', 'Mode2'] })
  mode: string[];

  @ApiProperty({ type: [String], example: ['DataType1', 'DataType2'] })
  data_type: string[];

  @ApiProperty({ type: [String], example: ['Protocol1', 'Protocol2'] })
  protocol: string[];

  @ApiProperty({ type: [String], example: ['Tool1', 'Tool2'] })
  tool: string[];

  @ApiProperty({ type: String, example: '10MB' })
  data_record_size: string;

  @ApiProperty({ type: String, example: '5%' })
  yoy_data_growth: string;

  @ApiProperty({ type: String, example: 'OAuth2' })
  data_provider_authentication: string;

  @ApiProperty({ type: String, example: 'BasicAuth' })
  data_consumer_authentication: string;

  @ApiProperty({ type: [String], example: ['Activity1', 'Activity2'] })
  activity_id: string[];

  @ApiProperty({ type: [String], example: ['MDO1', 'MDO2'] })
  mdo_id: string[];

  @ApiProperty({ type: String, example: 'user123' })
  last_modified_by: string;
}

export class IntegrationProcessResponseDTO {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  function_id: string[];

  @ApiProperty()
  sub_function_id: string[];

  @ApiProperty()
  title: string;

  @ApiProperty()
  version_type: string;

  @ApiProperty()
  version_id: string;

  @ApiProperty()
  sop_reference: string;

  @ApiProperty()
  owner_name: string;

  @ApiProperty()
  owner_role_designation: string;

  @ApiProperty()
  release_status: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  trigger: string;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  is_deleted: boolean;

  @ApiProperty()
  io_info: {
    inputs: string;
    outputs: string;
    business_outcome: string;
    major_requirements: string;
  };

  @ApiProperty()
  activities: {
    _id: string;
    sr_no: number;
    description: string;
    performed_at: string;
    performed_by: string;
    performed_where: string;
  }[];

  @ApiProperty()
  control_and_monitoring: {
    workflows: {
      _id: string;
      title: string;
      levels: string[];
      roles: string[];
      activity_id: string[];
      automation_id: string[];
      integration_scenario_id: string[];
      description: string;
      technology: string;
      is_deleted: boolean;
    }[];
    kpis: {
      title: string;
      description: string;
      calculation_logic: string;
      complexity_level: string[];
      role: string[];
      activity_id: string[];
      value: string[];
      bench_mark: string;
      _id: string;
    }[];
    reports: {
      title: string;
      description: string;
      attachments: string[];
      complexity_level: string[];
      calculation_logic: string;
      type: string[];
      application: string[];
      source_data: string[];
      role: string[];
      activity_id: string[];
      _id: string;
    }[];
    analytical_dashboards: {
      title: string;
      description: string;
      calculation_logic: string;
      attachments: string[];
      complexity_level: string[];
      type: string[];
      dashboard_application: string[];
      source_data: string[];
      role: string[];
      application: string[];
      activity_id: string[];
      _id: string;
      is_deleted: boolean;
    }[];
  };

  @ApiProperty()
  queries_and_responses: {
    query: string;
    response: string;
    _id: string;
  }[];

  @ApiProperty()
  data_management: {
    _id: string;
    title: string[];
    transaction_volumes: {
      average_transactions_year: string;
      maximum_transactions_month: string;
      maximum_transactions_day: string;
      average_line_items: string;
    };
    data_security: string;
    data_retention: string;
    data_residency: string;
  };

  @ApiProperty()
  integration_scenario: {
    title: string;
    description: string;
    data_provider: string[];
    data_consumer: string[];
    api_provider: string[];
    calling_system: string[];
    type: string[];
    data_volume_year: string[];
    mode: string[];
    data_type: string[];
    protocol: string[];
    tool: string[];
    data_record_size: string;
    yoy_data_growth: string;
    data_provider_authentication: string;
    data_consumer_authentication: string;
    activity_id: string[];
    mdo_id: string[];
  };

  @ApiProperty()
  documents: {
    title: string;
    desc: string;
    type: string[];
    source: string[];
    number_range: string;
    storage_requirements: string;
    attachments: string[];
    activity_id: string[];
    is_deleted: boolean;
    _id: string;
  }[];

  @ApiProperty()
  automation_scenarios: {}[];

  @ApiProperty()
  compliance_scenarios: {
    compliance_scenario_data: {
      title: string;
      description: string;
      attachments: string[];
      activity_id: string[];
      automation_id: string[];
      integration_scenario_id: string[];
      is_deleted: boolean;
      _id: string;
    }[];
    audit_trail_scenarios: {}[];
  };

  @ApiProperty()
  controls: {
    title: string;
    description: string;
    activity_id: string[];
    mdo_id: string[];
    _id: string;
  }[];

  @ApiProperty()
  created_on: string;

  @ApiProperty()
  __v: number;

  @ApiProperty()
  last_modified_by: string;

  @ApiProperty()
  last_modified_on: string;
}
