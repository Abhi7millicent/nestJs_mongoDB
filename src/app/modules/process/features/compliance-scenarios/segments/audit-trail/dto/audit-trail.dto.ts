import { ApiProperty } from '@nestjs/swagger';
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

export class UpsertAuditTrailScenariosDto {
  public _id: string;
  public audit_trail_scenarios: AuditTrailScenariosDto[] = [];
}

export class AuditTrailDto {
  @ApiProperty({
    example: 'System Audit Trail 1',
    description: 'System Audit Trail 1',
  })
  title: string;

  @ApiProperty({
    example:
      'Scenario for tracking changes and activities in the system for audit purposes.',
    description: 'Description of the scenario',
  })
  description: string;

  @ApiProperty({
    type: [String],
    example: ['activity101'],
    description: 'Array of activities',
  })
  activity_id: string[];

  @ApiProperty({
    type: [String],
    example: ['automation101'],
    description: 'Array of automation ids',
  })
  automation_id: string[];

  @ApiProperty({
    type: [String],
    example: ['log1.txt'],
    description: 'Array of attachments',
  })
  attachments: string[];

  @ApiProperty({
    type: [String],
    example: ['integration101'],
    description: 'Array of integration scenario ids',
  })
  integration_scenario_id: string[];

  @ApiProperty({
    type: [String],
    example: ['admin'],
    description: 'Array of roles',
  })
  role: string[];

  @ApiProperty({
    example: 'admin1',
    description: 'User who last modified the activity',
  })
  last_modified_by: string;

  @ApiProperty({
    example: false,
    description: 'Flag indicating whether the activity is deleted or not',
  })
  is_deleted: boolean;
}

export class ApiResponseDto {
  @ApiProperty({ example: 201, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'AuditTrailScenarios created successfully',
    description: 'Response message',
  })
  message: string;

  // @ApiProperty({ description: 'Response data' })
  @ApiProperty({ type: [AuditTrailDto] })
  data: {
    created?: AuditTrailDto[];
    updated?: any[]; // Update type as required
  };
}

export class DeleteAuditTrailResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ example: 'Audit trail deleted' })
  message: string;

  @ApiProperty({
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
      },
      audit_trail_id: {
        type: 'string',
        example: 'at_ruyuwn69e',
        description: 'Audit trail id',
      },
    },
  })
  data: {
    _id: string;
    audit_trail_id: string;
  };
}

export class CreateAuditTrailErrorResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to create audit trail' })
  error: string;
}

export class DeleteAuditTrailErrorResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to delete audit trail' })
  error: string;
}
