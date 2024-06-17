import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  HttpException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { UpsertActivityDto } from './dto/activities.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { error } from 'console';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Activities')
@Controller('v1/process')
export class ActivitiesController {
  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('/activities')
  @ApiOperation({ summary: 'Post activity' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '6667e1246e91ff27e948a0e9',
          description: 'Identifier for the activity',
        },
        activity: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              sr_no: {
                type: 'string',
                example: '002',
                description: 'Serial number for the activity',
              },
              description: {
                type: 'string',
                example: 'Initial activity description',
                description: 'Description of the activity',
              },
              performed_at: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'date-time',
                  example: '2024-06-01T12:00:00Z',
                },
                description:
                  'Array of timestamps when the activity was performed',
              },
              performed_by: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'user1',
                },
                description: 'Array of users who performed the activity',
              },
              performed_where: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'location1',
                },
                description:
                  'Array of locations where the activity was performed',
              },
              value_calculation_logic: {
                type: 'string',
                example: 'logic1',
                description: 'Logic used for value calculation',
              },
              accounts_postings: {
                type: 'string',
                example: 'accounting details 1',
                description: 'Details of accounting postings',
              },
              last_modified_by: {
                type: 'string',
                example: 'admin1',
                description: 'User who last modified the activity',
              },
              is_deleted: {
                type: 'boolean',
                example: false,
                description:
                  'Flag indicating whether the activity is deleted or not',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Activity created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Activity created successfully',
            },
            data: {
              type: 'object',
              properties: {
                created: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      sr_no: { type: 'string', example: '002' },
                      description: {
                        type: 'string',
                        example: 'Initial activity description',
                      },
                      performed_at: {
                        type: 'array',
                        items: {
                          type: 'string',
                          format: 'date-time',
                          example: '2024-06-01T12:00:00Z',
                        },
                      },
                      performed_by: {
                        type: 'array',
                        items: { type: 'string', example: 'user1' },
                      },
                      performed_where: {
                        type: 'array',
                        items: { type: 'string', example: 'location1' },
                      },
                      value_calculation_logic: {
                        type: 'string',
                        example: 'logic1',
                      },
                      accounts_postings: {
                        type: 'string',
                        example: 'accounting details 1',
                      },
                      is_deleted: { type: 'boolean', example: false },
                      _id: { type: 'string', example: 'activity_0zy3wf788' },
                    },
                  },
                },
                updated: {
                  type: 'array',
                  items: { type: 'object' },
                },
              },
            },
          },
        },
        example: {
          statusCode: 201,
          success: true,
          message: 'Activity created successfully',
          data: {
            created: [
              {
                sr_no: '002',
                description: 'Initial activity description',
                performed_at: ['2024-06-01T12:00:00Z', '2024-06-02T12:00:00Z'],
                performed_by: ['user1', 'user2'],
                performed_where: ['location1', 'location2'],
                value_calculation_logic: 'logic1',
                accounts_postings: 'accounting details 1',
                is_deleted: false,
                _id: 'activity_0zy3wf788',
              },
              {
                sr_no: '002',
                description: 'Second activity description',
                performed_at: ['2024-06-03T14:00:00Z'],
                performed_by: ['user3'],
                performed_where: ['location3'],
                value_calculation_logic: 'logic2',
                accounts_postings: 'accounting details 2',
                is_deleted: false,
                _id: 'activity_4tzm6nz0c',
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
    description: 'Failed to create the activity',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            message: {
              type: 'string',
              example: 'Failed to create the activity',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  // @HttpCode(HttpStatus.CREATED)
  async addActivity(@Body() createActivityDto: UpsertActivityDto) {
    try {
      const data = await this.activitiesService.Upsert(createActivityDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Activity created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the activity');
      }
    }
  }

  // @Put(':processId/activities/:activityId')
  // async updateActivity(
  //   @Param('processId') processId: string,
  //   @Param('activityId') activityId: string,
  //   @Body() activityData: any,
  // ): Promise<any> {
  //   return this.activitiesService.updateActivity(
  //     processId,
  //     activityId,
  //     activityData,
  //   );
  // }

  @Put(':processId/activities-delete/:activityId')
  @ApiOperation({ summary: 'Delete activity' })
  @ApiParam({
    name: 'activityId',
    type: 'string',
    description: 'Enter activity ID',
    required: true,
  })
  @ApiParam({
    name: 'processId',
    type: 'string',
    description: 'Enter process ID',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Activity deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Activity deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                activity_id: {
                  type: 'string',
                  example: 'activity_h8poikl68',
                  description: 'Activity id',
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
    description: 'Failed to delete the activity',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete the activity',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  async updateActivityIsDeleted(
    @Param('processId') processId: string,
    @Param('activityId') activityId: string,
  ) {
    try {
      const archiveData =
        await this.activitiesService.getByProcessById(processId);

      const result = await this.activitiesService.updateActivityIsDeleted(
        processId,
        activityId,
      );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Activity deleted successfully',
        // data: result,
        data: {
          processId: processId,
          activityId: activityId,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the activity');
      }
    }
  }

  // @Put(':processId/activities-soft-delete/:activityId')
  // async updateActivityIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('activityId') activityId: string,
  // ) {
  //   return this.activitiesService.updateActivityIsSoftDeleted(
  //     processId,
  //     activityId,
  //   );
  // }
}
