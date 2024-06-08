import {
  IsString,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  ArrayNotEmpty,
} from 'class-validator';

export class AuditTrailScenariosDto {
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  activity_id: string[];

  @IsArray()
  @IsString({ each: true })
  automation_id: string[];

  @IsArray()
  @IsString({ each: true })
  attachments: string[];

  @IsArray()
  @IsString({ each: true })
  integration_scenario_id: string[];

  @IsArray()
  @IsString({ each: true })
  role: string[];

  @IsBoolean()
  is_deleted: boolean;

  @IsString()
  last_modified_by: string;
}
