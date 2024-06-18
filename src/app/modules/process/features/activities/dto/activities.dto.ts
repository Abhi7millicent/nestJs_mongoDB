import { ApiProperty } from '@nestjs/swagger';

export class ActivityDto {
  _id: string;
  sr_no: string;
  description: string;
  performed_at: string[];
  performed_by: string[];
  performed_where: string[];
  value_calculation_logic: string;
  accounts_postings: string;
  last_modified_by: string;
  is_deleted: boolean;
}

export class UpsertActivityDto {
  public _id: string;
  public activity: ActivityDto[] = [];
}

export class ActivityDataDto {
  @ApiProperty({
    description: 'Identifier for the activity',
    example: '6667e1246e91ff27e948a0e9',
  })
  _id: string;

  @ApiProperty({
    description: 'Serial number for the activity',
    example: '002',
  })
  sr_no: string;

  @ApiProperty({
    description: 'Description of the activity',
    example: 'Initial activity description',
  })
  description: string;

  @ApiProperty({
    description: 'Array of timestamps when the activity was performed',
    example: ['2024-06-01T12:00:00Z'],
    type: [String],
    format: 'date-time',
  })
  performed_at: string[];

  @ApiProperty({
    description: 'Array of users who performed the activity',
    example: ['user1'],
    type: [String],
  })
  performed_by: string[];

  @ApiProperty({
    description: 'Array of locations where the activity was performed',
    example: ['location1'],
    type: [String],
  })
  performed_where: string[];

  @ApiProperty({
    description: 'Logic used for value calculation',
    example: 'logic1',
  })
  value_calculation_logic: string;

  @ApiProperty({
    description: 'Details of accounting postings',
    example: 'accounting details 1',
  })
  accounts_postings: string;

  @ApiProperty({
    description: 'User who last modified the activity',
    example: 'admin1',
  })
  last_modified_by: string;

  @ApiProperty({
    description: 'Flag indicating whether the activity is deleted or not',
    example: false,
  })
  is_deleted: boolean;
}

export class CreateActivityDto {
  @ApiProperty({
    description: 'Identifier for the activity',
    example: '6667e1246e91ff27e948a0e9',
  })
  _id: string;

  @ApiProperty({
    type: [ActivityDataDto],
    description: 'Array of activities',
  })
  activity: ActivityDataDto[];
}

export class CreateActivityResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 201 })
  statusCode: number;

  @ApiProperty({ description: 'Success flag', example: true })
  success: boolean;

  @ApiProperty({
    description: 'Response message',
    example: 'Activity created successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Created activity data',
    type: [ActivityDataDto],
  })
  data: {
    created: ActivityDataDto[];
    updated: any[];
  };
}

export class ErrorResponseDto {
  @ApiProperty({ description: 'HTTP status code', example: 500 })
  statusCode: number;

  @ApiProperty({ description: 'Success flag', example: false })
  success: boolean;

  @ApiProperty({
    description: 'Error message',
    example: 'Failed to create the activity',
  })
  message: string;
}

class ActivityDeletedDataDto {
  @ApiProperty({
    description: 'Process id',
    example: '6667e1246e91ff27e948a0e9',
  })
  _id: string;

  @ApiProperty({
    description: 'Activity id',
    example: 'activity_h8poikl68',
  })
  activity_id: string;
}

export class ActivityDeletedResponseDto {
  @ApiProperty({
    description: 'HTTP status code',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Success flag',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Response message',
    example: 'Activity deleted',
  })
  message: string;

  @ApiProperty({
    description: 'Deleted activity data',
    type: ActivityDeletedDataDto,
  })
  data: ActivityDeletedDataDto;
}

export class ErrorResponsePutDto {
  @ApiProperty({ description: 'HTTP status code', example: 500 })
  statusCode: number;

  @ApiProperty({ description: 'Success flag', example: false })
  success: boolean;

  @ApiProperty({
    description: 'Error message',
    example: 'Failed to delete the activity',
  })
  message: string;
}
