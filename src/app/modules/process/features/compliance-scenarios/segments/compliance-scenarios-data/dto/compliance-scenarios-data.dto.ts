import {
  IsString,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class ComplianceScenarioDataDto {
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  attachments: string[];

  @IsArray()
  @IsString({ each: true })
  activity_id: string[];

  @IsArray()
  @IsString({ each: true })
  automation_id: string[];

  @IsArray()
  @IsString({ each: true })
  integration_scenario_id: string[];

  @IsString()
  last_modified_by: string;

  @IsBoolean()
  is_deleted: boolean;
}

export class UpsertComplianceScenarioDataDto {
  public _id: string;
  public compliance_scenario: ComplianceScenarioDataDto[] = [];
}
