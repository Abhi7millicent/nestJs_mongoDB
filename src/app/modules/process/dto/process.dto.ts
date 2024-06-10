import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Date } from 'mongoose';

class IoInfoDto {
  @IsString()
  inputs: string;

  @IsString()
  outputs: string;

  @IsString()
  business_outcome: string;

  @IsString()
  major_requirements: string;
}

class ControlAndMonitoringDto {
  @IsArray()
  @IsString({ each: true })
  workflows: string[];

  @IsArray()
  @IsString({ each: true })
  kpis: string[];

  @IsArray()
  @IsString({ each: true })
  reports: string[];

  @IsArray()
  @IsString({ each: true })
  analytical_dashboards: string[];
}

class DataManagementDto {
  @IsArray()
  @IsObject({ each: true })
  master_data_objects: object[];

  @IsObject()
  data_management_info: object;
}

class ComplianceScenariosDto {
  @IsArray()
  @IsObject({ each: true })
  compliance_scenario_data: object[];

  @IsArray()
  @IsObject({ each: true })
  audit_trail_scenarios: object[];
}

export class CreateProcessDto {
  @IsArray()
  @IsString({ each: true })
  function_id: string[];

  @IsArray()
  @IsString({ each: true })
  sub_function_id: string[];

  @IsString()
  title: string;

  @IsString()
  version_type: string;

  @IsString()
  version_id: string;

  @IsString()
  sop_reference: string;

  @IsString()
  owner_name: string;

  @IsString()
  owner_role_designation: string;

  @IsString()
  release_status: string;

  @IsString()
  description: string;

  @IsString()
  trigger: string;

  @IsString()
  created_by: string;

  @IsDateString()
  created_on: Date;

  @IsString()
  last_modified_by: string;

  @IsDateString()
  last_modified_on: Date;

  @IsBoolean()
  is_deleted: boolean;

  @IsObject()
  @ValidateNested()
  @Type(() => IoInfoDto)
  io_info: IoInfoDto;

  @IsArray()
  @IsObject({ each: true })
  activities: object[];

  @IsObject()
  @ValidateNested()
  @Type(() => ControlAndMonitoringDto)
  control_and_monitoring: ControlAndMonitoringDto;

  @IsArray()
  @IsObject({ each: true })
  queries_and_responses: object[];

  @IsObject()
  @ValidateNested()
  @Type(() => DataManagementDto)
  data_management: DataManagementDto;

  @IsObject()
  integration_scenario: object;

  @IsArray()
  @IsObject({ each: true })
  documents: object[];

  @IsArray()
  @IsObject({ each: true })
  automation_scenarios: object[];

  @IsObject()
  @ValidateNested()
  @Type(() => ComplianceScenariosDto)
  compliance_scenarios: ComplianceScenariosDto;

  @IsArray()
  @IsObject({ each: true })
  controls: object[];
}
