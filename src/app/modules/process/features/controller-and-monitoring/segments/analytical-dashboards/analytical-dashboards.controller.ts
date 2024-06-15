import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { UpsertAnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Analytical-dashboard')
@Controller('v1/process')
export class AnalyticalDashboardsController {
  constructor(
    private readonly analyticalDashboardsService: AnalyticalDashboardsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('analytical-dashboards')
  @ApiOperation({ summary: 'Post Analytical dashboard' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        analytical_dashboards: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'analytical Dashboard',
                description: 'Title of the analytical dashboard',
              },
              description: {
                type: 'string',
                example: 'A comprehensive dashboard for sales analytics.',
                description: 'Description of the analytical dashboard',
              },
              calculation_logic: {
                type: 'string',
                example:
                  'Current month sales - Previous month sales / Previous month sales * 100',
                description: 'Logic used for calculations in the dashboard',
              },
              attachments: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'report.pdf',
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
              type: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'Analytical',
                },
                description: 'Array of dashboard types',
              },
              dashboard_application: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'PowerBI',
                },
                description: 'Array of dashboard applications',
              },
              source_data: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'CRM',
                },
                description: 'Array of data sources',
              },
              role: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'Analyst',
                },
                description: 'Array of roles',
              },
              application: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'test',
                },
                description: 'Array of applications',
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
                example: 'john.doe',
                description: 'User who last modified the analytical dashboard',
              },
              is_deleted: {
                type: 'boolean',
                example: false,
                description:
                  'Flag indicating whether the analytical dashboard is deleted or not',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'AnalyticalDashboards created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'AnalyticalDashboards created successfully',
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
                        example: 'analytical Dashboard',
                      },
                      description: {
                        type: 'string',
                        example:
                          'A comprehensive dashboard for sales analytics.',
                      },
                      calculation_logic: {
                        type: 'string',
                        example:
                          'Current month sales - Previous month sales / Previous month sales * 100',
                      },
                      attachments: {
                        type: 'array',
                        items: { type: 'string', example: 'report.pdf' },
                      },
                      complexity_level: {
                        type: 'array',
                        items: { type: 'string', example: 'High' },
                      },
                      type: {
                        type: 'array',
                        items: { type: 'string', example: 'Analytical' },
                      },
                      dashboard_application: {
                        type: 'array',
                        items: { type: 'string', example: 'PowerBI' },
                      },
                      source_data: {
                        type: 'array',
                        items: { type: 'string', example: 'CRM' },
                      },
                      role: {
                        type: 'array',
                        items: { type: 'string', example: 'Analyst' },
                      },
                      application: {
                        type: 'array',
                        items: { type: 'string', example: 'test' },
                      },
                      activity_id: {
                        type: 'array',
                        items: { type: 'string', example: 'activity1' },
                      },
                      is_deleted: { type: 'boolean', example: false },
                      _id: { type: 'string', example: 'ad_r5vnypwae' },
                    },
                  },
                },
                updated: { type: 'array', items: { type: 'object' } },
              },
            },
          },
        },
        example: {
          statusCode: 201,
          success: true,
          message: 'AnalyticalDashboards created successfully',
          data: {
            created: [
              {
                title: 'analytical Dashboard',
                description: 'A comprehensive dashboard for sales analytics.',
                calculation_logic:
                  'Current month sales - Previous month sales / Previous month sales * 100',
                attachments: ['report.pdf', 'chart.png'],
                complexity_level: ['High'],
                type: ['Analytical', 'Strategic'],
                dashboard_application: ['PowerBI', 'Tableau'],
                source_data: ['CRM', 'ERP'],
                role: ['Analyst', 'Manager'],
                application: ['test', 'test2'],
                activity_id: ['activity1', 'activity2'],
                is_deleted: false,
                _id: 'ad_r5vnypwae',
              },
            ],
            updated: [],
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete analytical dashboard',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete analytical dashboard',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async upsertAnalyticalDashboards(
    @Body() createAnalyticalDashboardsDto: UpsertAnalyticalDashboardsDto,
  ) {
    try {
      const data = await this.analyticalDashboardsService.Upsert(
        createAnalyticalDashboardsDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AnalyticalDashboards created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the AnalyticalDashboards',
        );
      }
    }
  }

  // @Put(':processId/analytical-dashboards/:analyticalDashboardsId')
  // async updateAnalyticalDashboards(
  //   @Param('processId') processId: string,
  //   @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  //   @Body() analyticalDashboardsDto: any,
  // ): Promise<any> {
  //   return this.analyticalDashboardsService.updateAnalyticalDashboards(
  //     processId,
  //     analyticalDashboardsId,
  //     analyticalDashboardsDto,
  //   );
  // }

  @Put(':processId/analytical-dashboards-delete/:analyticalDashboardsId')
  @ApiOperation({ summary: 'Delete analytical dashboard' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'analyticalDashboardId',
    required: true,
    description: 'Analytical dashboard ID',
    example: 'ad_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Analytical dashboard deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Analytical dashboard deleted',
            },
            data: {
              type: 'object',
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
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete analytical dashboard',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete analytical dashboard',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  async updateAnalyticalDashboardsIsDeleted(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  ) {
    try {
      const archiveData =
        await this.analyticalDashboardsService.getByProcessById(processId);

      const result =
        await this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(
          processId,
          analyticalDashboardsId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'analyticalDashboards deleted successfully',
        data: {
          processId: processId,
          analyticalDashboardsId: analyticalDashboardsId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the analyticalDashboards',
        );
      }
    }
  }

  // @Put(':processId/analytical-dashboards-soft-delete/:analyticalDashboardsId')
  // async updateAnalyticalDashboardsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  // ) {
  //   return this.analyticalDashboardsService.updateAnalyticalDashboardsIsSoftDeleted(
  //     processId,
  //     analyticalDashboardsId,
  //   );
  // }
}
