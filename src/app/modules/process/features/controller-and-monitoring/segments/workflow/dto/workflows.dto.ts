import { ApiBody, ApiProperty } from '@nestjs/swagger';

export class WorkflowsDto {
  @ApiProperty({
    example: '666d417093b9df8f829b22a3',
    description: 'Unique identifier',
  })
  _id: string;

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  title: string;

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  description: string;

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  technology: string;

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  levels: string[];

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  roles: string[];

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  activity_id: string[];

  @ApiProperty({
    example: 'Automated data processing',
    description: 'workflow title',
  })
  automation_id: string[];

  @ApiProperty()
  integration_scenario_id: string[];

  @ApiProperty()
  last_modified_by: string;

  @ApiProperty()
  is_deleted: boolean;
}

export class UpsertWorkflowsDto {
  @ApiProperty({
    example: '666d417093b9df8f829b22a3',
    description: 'Unique identifier',
  })
  public _id: string;
  public workflows: WorkflowsDto[] = [];
}
