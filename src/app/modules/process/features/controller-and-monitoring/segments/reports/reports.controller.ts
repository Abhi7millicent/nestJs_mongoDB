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
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsDto, UpsertReportsDto } from './dto/reports.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Reports')
@Controller('v1/process')
export class WorkflowsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('reports')
  @ApiOperation({ summary: 'Post report' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        reports: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'Report Financial Report',
                description: 'Title of the report',
              },
              description: {
                type: 'string',
                example:
                  'A detailed report of the financial performance for the quarter.',
                description: 'Description of the report',
              },
              attachments: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'financial-summary.pdf',
                },
                description: 'Array of attachment filenames',
              },
              complexity_level: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'High',
                },
                description: 'Array of complexity levels',
              },
              calculation_logic: {
                type: 'string',
                example:
                  'Current month sales - Previous month sales / Previous month sales * 100',
                description: 'Calculation logic used in the report',
              },
              type: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'Financial',
                },
                description: 'Array of report types',
              },
              application: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'Excel',
                },
                description: 'Array of applications used',
              },
              source_data: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'ERP',
                },
                description: 'Array of source data systems',
              },
              role: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'Financial Analyst',
                },
                description: 'Array of roles associated with the report',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'activity1',
                },
                description: 'Array of associated activity IDs',
              },
              last_modified_by: {
                type: 'string',
                example: 'alex.smith',
                description: 'User who last modified the report',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Reports created successfully',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 201,
        },
        success: {
          type: 'boolean',
          example: true,
        },
        message: {
          type: 'string',
          example: 'reports created successfully',
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
                    example: 'Report Financial Report',
                  },
                  description: {
                    type: 'string',
                    example:
                      'A detailed report of the financial performance for the quarter.',
                  },
                  attachments: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'financial-summary.pdf',
                    },
                  },
                  complexity_level: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'High',
                    },
                  },
                  calculation_logic: {
                    type: 'string',
                    example:
                      'Current month sales - Previous month sales / Previous month sales * 100',
                  },
                  type: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'Financial',
                    },
                  },
                  application: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'Excel',
                    },
                  },
                  source_data: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'ERP',
                    },
                  },
                  role: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'Financial Analyst',
                    },
                  },
                  activity_id: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'activity1',
                    },
                  },
                  _id: {
                    type: 'string',
                    example: 'report_li2jrnnin',
                  },
                },
              },
            },
            updated: {
              type: 'array',
              items: {
                type: 'object',
              },
              example: [],
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete report',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete report',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addReports(@Body() createReportsDto: UpsertReportsDto) {
    try {
      const data = await this.reportsService.Upsert(createReportsDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'reports created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the reports');
      }
    }
  }

  // @Put(':processId/reports/:reportsId')
  // async updateReports(
  //   @Param('processId') processId: string,
  //   @Param('reportsId') reportsId: string,
  //   @Body() reportsDto: any,
  // ): Promise<any> {
  //   return this.reportsService.updateReports(processId, reportsId, reportsDto);
  // }

  @Put(':processId/reports-delete/:reportsId')
  @ApiOperation({ summary: 'Delete report' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'reportId',
    required: true,
    description: 'Report ID',
    example: 'report_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Report deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Report deleted',
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
                  example: 'report_ruyuwn69e',
                  description: 'Report id',
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
    description: 'Failed to delete report',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete report',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  async updateReportsIsDeleted(
    @Param('processId') processId: string,
    @Param('reportsId') reportsId: string,
  ) {
    try {
      const archiveData = await this.reportsService.getByProcessById(processId);

      const result = await this.reportsService.updateReportsIsDeleted(
        processId,
        reportsId,
      );
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'reports deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the reports');
      }
    }
  }

  // @Put(':processId/reports-soft-delete/:reportsId')
  // async updateReportsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('reportsId') reportsId: string,
  // ) {
  //   return this.reportsService.updateReportsIsSoftDeleted(processId, reportsId);
  // }
}
