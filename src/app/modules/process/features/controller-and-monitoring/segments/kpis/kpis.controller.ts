import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { KPIsService } from './kpis.service';
import { KPIsDto, UpsertKPIsDto } from './dto/kpis.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Kpis')
@Controller('v1/process')
export class KPIsController {
  constructor(
    private readonly kpisService: KPIsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('kpis')
  @ApiOperation({ summary: 'Post kpis' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        kpis: {
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
              last_modified_by: {
                type: 'string',
                example: 'jane.doe',
                description: 'User who last modified the KPI',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'KPIs created successfully',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 201,
          description: 'HTTP status code',
        },
        success: {
          type: 'boolean',
          example: true,
          description: 'Indicates whether the request was successful',
        },
        message: {
          type: 'string',
          example: 'KPIs created successfully',
          description: 'Response message',
        },
        data: {
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
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete kpis',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete kpis',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addKPIs(@Body() createkpisDto: UpsertKPIsDto) {
    try {
      const data = await this.kpisService.Upsert(createkpisDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'KPIs created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the KPIs');
      }
    }
  }

  // @Put(':processId/kpis/:kpisId')
  // async updateKPIs(
  //   @Param('processId') processId: string,
  //   @Param('kpisId') kpisId: string,
  //   @Body() kpisDto: any,
  // ): Promise<any> {
  //   return this.kpisService.updateKPIs(processId, kpisId, kpisDto);
  // }

  @Put(':processId/kpis-delete/:kpisId')
  @ApiOperation({ summary: 'Delete kpis' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'kpisId',
    required: true,
    description: 'Kpis ID',
    example: 'kpis_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Kpis deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Kpis deleted',
            },
            data: {
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
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete kpis',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete kpis',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  async updateKPIsIsDeleted(
    @Param('processId') processId: string,
    @Param('kpisId') kpisId: string,
  ) {
    try {
      const archiveData = await this.kpisService.getByProcessById(processId);

      const result = await this.kpisService.updateKPIsIsDeleted(
        processId,
        kpisId,
      );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'kpis deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the kpis');
      }
    }
  }

  // @Put(':processId/kpis-soft-delete/:kpisId')
  // async updateKPIsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('kpisId') kpisId: string,
  // ) {
  //   return this.kpisService.updateKPIsIsSoftDeleted(processId, kpisId);
  // }
}
