import { ApiProperty } from '@nestjs/swagger';

export class ReportsDto {
  _id: string;
  title: string;
  description: string;
  calculation_logic: string;
  attachments: string[];
  complexity_level: string[];
  type: string[];
  application: string[];
  source_data: string[];
  role: string[];
  activity_id: string[];
  automation_id: string[];
  integration_scenario_id: string[];
  last_modified_by: string;
  is_deleted: boolean;
}

export class UpsertReportsDto {
  public _id: string;
  public reports: ReportsDto[] = [];
}

export class ReportData {
  @ApiProperty({
    type: String,
    example: 'Report Financial Report',
    description: 'Title of the report',
  })
  title: string;

  @ApiProperty({
    type: String,
    example: 'A detailed report of the financial performance for the quarter.',
    description: 'Description of the report',
  })
  description: string;

  @ApiProperty({
    type: [String],
    example: ['financial-summary.pdf'],
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
    type: String,
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
    description: 'Calculation logic used in the report',
  })
  calculation_logic: string;

  @ApiProperty({
    type: [String],
    example: ['Financial'],
    description: 'Array of report types',
  })
  type: string[];

  @ApiProperty({
    type: [String],
    example: ['Excel'],
    description: 'Array of applications used',
  })
  application: string[];

  @ApiProperty({
    type: [String],
    example: ['ERP'],
    description: 'Array of source data systems',
  })
  source_data: string[];

  @ApiProperty({
    type: [String],
    example: ['Financial Analyst'],
    description: 'Array of roles associated with the report',
  })
  role: string[];

  @ApiProperty({
    type: [String],
    example: ['activity1'],
    description: 'Array of associated activity IDs',
  })
  activity_id: string[];

  @ApiProperty({
    type: String,
    example: 'alex.smith',
    description: 'User who last modified the report',
  })
  last_modified_by: string;
}

export class CreatedReportResponse {
  @ApiProperty({ type: Number, example: 201 })
  statusCode: number;

  @ApiProperty({ type: Boolean, example: true })
  success: boolean;

  @ApiProperty({ type: String, example: 'reports created successfully' })
  message: string;

  @ApiProperty({
    type: [ReportData],
    description: 'Data object containing created report(s)',
  })
  data: {
    created: ReportData[];
    updated: any[]; // Assuming it's an array of any for updated reports
  };
}

export class FailedReportResponse {
  @ApiProperty({ type: Number, example: 500 })
  statusCode: number;

  @ApiProperty({ type: Boolean, example: false })
  success: boolean;

  @ApiProperty({ type: String, example: 'Failed to delete report' })
  error: string;
}

export class DeletedReportResponse {
  @ApiProperty({ type: Number, example: 200 })
  statusCode: number;

  @ApiProperty({ type: Boolean, example: true })
  success: boolean;

  @ApiProperty({ type: String, example: 'Report deleted' })
  message: string;

  @ApiProperty({
    type: Object,
    description: 'Data object containing IDs of deleted report and process',
    properties: {
      _id: {
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
      },
      report_id: {
        type: 'string',
        example: 'report_ruyuwn69e',
        description: 'Report id',
      },
    },
  })
  data: {
    _id: string;
    report_id: string;
  };
}

export class FailedReportDeletionResponse {
  @ApiProperty({ type: Number, example: 500 })
  statusCode: number;

  @ApiProperty({ type: Boolean, example: false })
  success: boolean;

  @ApiProperty({ type: String, example: 'Failed to delete report' })
  error: string;
}
