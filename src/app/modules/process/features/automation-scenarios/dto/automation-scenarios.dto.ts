import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class AutomationScenarioDto {
  _id: string;

  @IsString()
  type: string;

  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsString()
  technology: string;

  @IsString()
  last_modified_by: string;

  @IsArray()
  @IsString({ each: true })
  activity_id: string[];

  @IsArray()
  @IsString({ each: true })
  mdo_id: string[];

  @IsArray()
  @IsString({ each: true })
  integration_scenario_id: string[];

  @IsBoolean()
  is_deleted: boolean = false;
}

export class UpsertAutomationScenarioDto {
  public _id: string;
  public automation_scenario: AutomationScenarioDto[] = [];
}
