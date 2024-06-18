import { ApiProperty } from '@nestjs/swagger';
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

export class ComplianceScenarioDto {
  @ApiProperty({
    example: 'GDPR Compliance 1',
    description: 'GDPR Compliance 1',
  })
  title: string;

  @ApiProperty({
    example:
      'Scenario for reviewing and ensuring compliance with GDPR regulations.',
    description: 'Description of the scenario',
  })
  description: string;

  @ApiProperty({
    type: [String],
    example: ['file1.pdf'],
    description: 'Array of attachments',
  })
  attachments: string[];

  @ApiProperty({
    type: [String],
    example: ['activity123'],
    description: 'Array of activities',
  })
  activity_id: string[];

  @ApiProperty({
    type: [String],
    example: ['automation123'],
    description: 'Array of automation ids',
  })
  automation_id: string[];

  @ApiProperty({
    type: [String],
    example: ['integration123'],
    description: 'Array of integration scenario ids',
  })
  integration_scenario_id: string[];

  @ApiProperty({
    example: 'user456',
    description: 'User who last modified the activity',
  })
  last_modified_by: string;

  @ApiProperty({
    example: false,
    description: 'Flag indicating whether the activity is deleted or not',
  })
  is_deleted: boolean;
}

// ApiResponseDto.ts

export class ComplianceScenarioApiResponseDto {
  @ApiProperty({ example: 201, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'ComplianceScenario created successfully',
    description: 'Response message',
  })
  message: string;

  // @ApiProperty({ description: 'Response data' })
  @ApiProperty({ type: [ComplianceScenarioDto] })
  data?: {
    created?: ComplianceScenarioDto[];
    updated?: any[]; // Update type as required
  };
}

export class ComplianceScenarioErrorResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to create compliance scenario' })
  error: string;
}

export class DeleteComplianceScenarioResponseDto {
  @ApiProperty({ example: 200, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Compliance scenario deleted',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
      },
      compliance_scenario_id: {
        type: 'string',
        example: 'cs_ruyuwn69e',
        description: 'Compliance scenario id',
      },
    },
  })
  data: {
    _id: string;
    compliance_scenario_id: string;
  };
}

export class ComplianceScenarioDeleteResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to delete compliance scenario' })
  error: string;
}
