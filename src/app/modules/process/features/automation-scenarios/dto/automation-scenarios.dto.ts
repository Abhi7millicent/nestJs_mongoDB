import { ApiProperty } from '@nestjs/swagger';
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

export class AutomationScenarioDataDto {
  @ApiProperty({
    type: 'string',
    example: 'Automated Testing',
    description: 'Type of automation scenario',
  })
  @IsString()
  type: string;

  @ApiProperty({
    type: 'string',
    example: 'Sample Automation Scenario',
    description: 'Title of the automation scenario',
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: 'string',
    example: 'This scenario automates the testing of a new feature.',
    description: 'Description of the automation scenario',
  })
  @IsString()
  desc: string;

  @ApiProperty({
    type: 'string',
    example: 'Selenium',
    description: 'Technology used in the automation scenario',
  })
  @IsString()
  technology: string;

  @ApiProperty({
    type: [String],
    example: ['activity1'],
    description: 'Array of activity IDs',
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  activity_id: string[];

  @ApiProperty({
    type: [String],
    example: ['mdo1'],
    description: 'Array of MDO IDs',
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  mdo_id: string[];

  @ApiProperty({
    type: [String],
    example: ['integration1'],
    description: 'Array of integration scenario IDs',
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  integration_scenario_id: string[];

  @ApiProperty({
    type: 'boolean',
    example: false,
    description: 'Flag indicating whether the scenario is deleted',
  })
  @IsBoolean()
  is_deleted: boolean;
}

// UpsertAutomationScenarioDto.ts
export class UpsertAutomationScenarioDataDto {
  @ApiProperty({
    type: 'string',
    example: '6667e1246e91ff27e948a0e9',
    description: 'Identifier for the automation scenario',
  })
  @IsString()
  _id: string;

  @ApiProperty({
    type: [AutomationScenarioDataDto],
    description: 'Array of automation scenarios',
  })
  @IsArray()
  @IsNotEmpty({ each: true })
  automation_scenario: AutomationScenarioDataDto[];
}

// AutomationScenarioApiResponseDto.ts
export class AutomationScenarioApiResponseDto {
  @ApiProperty({ example: 201, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'AutomationScenario created successfully',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: [AutomationScenarioDataDto],
    properties: {
      created: {
        type: 'array',
        items: { $ref: '#/components/schemas/AutomationScenarioDto' },
      },
      updated: {
        type: 'array',
        items: { type: 'object' }, // Update as needed
      },
    },
  })
  data?: {
    created: AutomationScenarioDataDto[];
    updated: any[]; // Update type as needed
  };
}

// AutomationScenarioErrorResponseDto.ts
export class AutomationScenarioErrorResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ example: 'Failed to create the automation process' })
  message: string;
}

export class DeleteAutomationScenarioResponseDto {
  @ApiProperty({ example: 200, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Automation scenario deleted',
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
      automation_scenario_id: {
        type: 'string',
        example: 'as_oh0ykw7az',
        description: 'Automation scenario id',
      },
    },
  })
  data: {
    _id: string;
    automation_scenario_id: string;
  };
}

export class AutomationScenarioErrorPutDto {
  @ApiProperty({ example: 500, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: false, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Failed to delete automation scenario',
    description: 'Error message',
  })
  error: string;
}
