import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class KPIsDto {
  _id: string;
  title: string;
  description: string;
  calculation_logic: string;
  complexity_level: string[];
  role: string[];
  activity_id: string[];
  value: string[];
  bench_mark: string;
  last_modified_by: string;
  is_deleted: boolean;
}

export class UpsertKPIsDto {
  public _id: string;
  public kpis: KPIsDto[] = [];
}

export class kpisData {
  @ApiProperty({
    type: String,
    example: 'Monthly Sales Growth',
    description: 'Title of the KPI',
  })
  title: string;

  @ApiProperty({
    type: String,
    example: 'Measures the monthly growth in sales revenue.',
    description: 'Description of the KPI',
  })
  description: string;

  @ApiProperty({
    type: String,
    example:
      'Current month sales - Previous month sales / Previous month sales * 100',
    description: 'Logic used for KPI calculation',
  })
  calculation_logic: string;

  @ApiProperty({
    type: [String],
    example: ['Medium'],
    description: 'Level of complexity of the KPI',
  })
  complexity_level: string[];

  @ApiProperty({
    type: [String],
    example: ['Sales Manager'],
    description: 'Roles associated with the KPI',
  })
  role: string[];

  @ApiProperty({
    type: [String],
    example: ['activity1'],
    description: 'Array of associated activities',
  })
  activity_id: string[];

  @ApiProperty({
    type: [String],
    example: ['test'],
    description: 'Values associated with the KPI',
  })
  value: string[];

  @ApiProperty({
    type: String,
    example: 'test',
    description: 'Benchmark value for the KPI',
  })
  bench_mark: string;

  @ApiProperty({
    type: String,
    example: 'jane.doe',
    description: 'User who last modified the KPI',
  })
  last_modified_by: string;
}

export class UpsertKPIsDataDto {
  @ApiProperty({
    example: '666d417093b9df8f829b22a3',
    description: 'Identifier for the activity',
  })
  _id: string;

  @ApiProperty({ type: [kpisData], description: 'Array of KPI objects' })
  @IsArray()
  kpis: kpisData[];
}

export class KPIsResponseDto {
  @ApiProperty({ example: 201, description: 'HTTP status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Indicates request success' })
  success: boolean;

  @ApiProperty({
    example: 'KPIs created successfully',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: 'object',
    properties: {
      created: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Monthly Sales Growth',
              description: 'Title of the KPI',
            },
            description: {
              type: 'string',
              example: 'Measures the monthly growth in sales revenue.',
              description: 'Description of the KPI',
            },
            calculation_logic: {
              type: 'string',
              example:
                'Current month sales - Previous month sales / Previous month sales * 100',
              description: 'Logic used for KPI calculation',
            },
            complexity_level: {
              type: 'array',
              items: {
                type: 'string',
                example: 'Medium',
              },
              description: 'Level of complexity of the KPI',
            },
            role: {
              type: 'array',
              items: {
                type: 'string',
                example: 'Sales Manager',
              },
              description: 'Roles associated with the KPI',
            },
            activity_id: {
              type: 'array',
              items: {
                type: 'string',
                example: 'activity1',
              },
              description: 'Array of associated activities',
            },
            value: {
              type: 'array',
              items: {
                type: 'string',
                example: 'test',
              },
              description: 'Values associated with the KPI',
            },
            bench_mark: {
              type: 'string',
              example: 'test',
              description: 'Benchmark value for the KPI',
            },
            _id: {
              type: 'string',
              example: 'kpis_3l251ajxa',
              description: 'Identifier for the KPI',
            },
          },
        },
      },
      updated: {
        type: 'array',
        items: {
          type: 'object',
        },
        description: 'Array of updated KPI objects',
      },
    },
  })
  data: {
    created: {
      title: string;
      description: string;
      calculation_logic: string;
      complexity_level: string[];
      role: string[];
      activity_id: string[];
      value: string[];
      bench_mark: string;
      _id: string;
    }[];
    updated: any[];
  };
}

export class KPIsErrorResponseDto {
  @ApiProperty({ example: 500, description: 'HTTP status code' })
  statusCode: number;

  @ApiProperty({ example: false, description: 'Indicates request failure' })
  success: boolean;

  @ApiProperty({
    example: 'Failed to create the KPIs',
    description: 'Error message',
  })
  error: string;
}

export class KPIsDeleteResponseDto {
  @ApiProperty({ example: 200, description: 'HTTP status code' })
  statusCode: number;

  @ApiProperty({ example: true, description: 'Indicates request success' })
  success: boolean;

  @ApiProperty({ example: 'Kpis deleted', description: 'Response message' })
  message: string;

  @ApiProperty({
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
      },
      kpis_id: {
        type: 'string',
        example: 'kpis_ruyuwn69e',
        description: 'Kpis id',
      },
    },
  })
  data: {
    _id: string;
    kpis_id: string;
  };
}

export class KPIsDeleteErrorResponseDto {
  @ApiProperty({ example: 500, description: 'HTTP status code' })
  statusCode: number;

  @ApiProperty({ example: false, description: 'Indicates request failure' })
  success: boolean;

  @ApiProperty({
    example: 'Failed to delete kpis',
    description: 'Error message',
  })
  error: string;
}
