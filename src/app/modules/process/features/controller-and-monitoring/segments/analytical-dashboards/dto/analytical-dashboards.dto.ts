import { ApiProperty } from '@nestjs/swagger';

export class AnalyticalDashboardsDto {
  _id: string;
  title: string;
  description: string;
  calculation_logic: string;
  attachments: string[];
  application: string[];
  complexity_level: string[];
  type: string[];
  dashboard_application: string[];
  source_data: string[];
  role: string[];
  activity_id: string[];
  automation_id: string[];
  integration_scenario_id: string[];
  last_modified_by: string;
  is_deleted: boolean;
}

export class UpsertAnalyticalDashboardsDto {
  public _id: string;
  public analytical_dashboards: AnalyticalDashboardsDto[] = [];
}

export class AnalyticalDashboardDto {
  @ApiProperty({
    example: 'analytical Dashboard',
    description: 'Title of the analytical dashboard',
  })
  title: string;

  @ApiProperty({
    example: 'A comprehensive dashboard for sales analytics.',
    description: 'Description of the analytical dashboard',
  })
  description: string;

  @ApiProperty({
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
    description: 'Logic used for calculations in the dashboard',
  })
  calculation_logic: string;

  @ApiProperty({
    type: [String],
    example: ['report.pdf'],
    description: 'Array of attachment filenames',
  })
  attachments: string[];

  @ApiProperty({
    type: [String],
    example: ['High'],
    description: 'Array of complexity levels',
  })
  complexity_level: string[];

  @ApiProperty({
    type: [String],
    example: ['Analytical'],
    description: 'Array of dashboard types',
  })
  type: string[];

  @ApiProperty({
    type: [String],
    example: ['PowerBI'],
    description: 'Array of dashboard applications',
  })
  dashboard_application: string[];

  @ApiProperty({
    type: [String],
    example: ['CRM'],
    description: 'Array of data sources',
  })
  source_data: string[];

  @ApiProperty({
    type: [String],
    example: ['Analyst'],
    description: 'Array of roles',
  })
  role: string[];

  @ApiProperty({
    type: [String],
    example: ['test'],
    description: 'Array of applications',
  })
  application: string[];

  @ApiProperty({
    type: [String],
    example: ['activity1'],
    description: 'Array of associated activity IDs',
  })
  activity_id: string[];

  @ApiProperty({
    example: 'john.doe',
    description: 'User who last modified the analytical dashboard',
  })
  last_modified_by: string;

  @ApiProperty({
    example: false,
    description:
      'Flag indicating whether the analytical dashboard is deleted or not',
  })
  is_deleted: boolean;
}

// AnalyticalDashboardApiResponseDto.ts

export class AnalyticalDashboardApiResponseDto {
  @ApiProperty({ example: 201, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'AnalyticalDashboards created successfully',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: [AnalyticalDashboardDto],
    properties: {
      created: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/AnalyticalDashboardDto',
        },
      },
      updated: {
        type: 'array',
        items: { type: 'object' },
      },
    },
  })
  data: {
    created: AnalyticalDashboardDto[];
    updated: any[];
  };
}

// AnalyticalDashboardErrorResponseDto.ts

export class AnalyticalDashboardErrorResponseDto {
  @ApiProperty({ example: 500, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: false, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Failed to delete analytical dashboard',
    description: 'Error message',
  })
  error: string;
}

export class AnalyticalDashboardDeleteResponseDto {
  @ApiProperty({ example: 200, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Analytical dashboard deleted',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: ['object'],
    properties: {
      _id: {
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
      },
      analytical_dashboard_id: {
        type: 'string',
        example: 'ad_ruyuwn69e',
        description: 'Analytical dashboard id',
      },
    },
  })
  data: {
    _id: string;
    analytical_dashboard_id: string;
  };
}

export class AnalyticalDashboardDeleteErrorResponseDto {
  @ApiProperty({ example: 500, description: 'Status code' })
  statusCode: number;

  @ApiProperty({ example: false, description: 'Request success status' })
  success: boolean;

  @ApiProperty({
    example: 'Failed to delete analytical dashboard',
    description: 'Error message',
  })
  error: string;
}
