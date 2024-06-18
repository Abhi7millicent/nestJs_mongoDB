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
import { WorkflowsService } from './workflow.service';
import { UpsertWorkflowsDto } from './dto/workflows.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorator/http-response-handler.decorator';

@ApiTags('Workflow')
@Controller('v1/process')
export class WorkflowsController {
  constructor(
    private readonly workflowsService: WorkflowsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('work-flows')
  @ApiOperation({ summary: 'Post activity' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '6667edbe6792baa96f738e2e',
          description: 'Identifier for the activity',
        },
        workflows: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'Automated Data Processing2',
                description: 'Title of the workflow',
              },
              description: {
                type: 'string',
                example:
                  'Workflow for automating data processing tasks using Python and SQL.',
                description: 'Detailed description of the workflow',
              },
              technology: {
                type: 'string',
                example: 'Python, SQL',
                description: 'Technologies used in the workflow',
              },
              levels: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'beginner',
                },
                description: 'Levels of the workflow',
              },
              roles: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'data_engineer',
                },
                description: 'Roles associated with the workflow',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'act123',
                },
                description: 'Array of associated activities',
              },
              automation_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'auto123',
                },
                description: 'Array of associated automation ids',
              },
              integration_scenario_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'int123',
                },
                description: 'Array of associated integration scenario ids',
              },
              last_modified_by: {
                type: 'string',
                example: 'user123',
                description: 'User who last modified the workflow',
              },
              is_deleted: {
                type: 'boolean',
                example: false,
                description: 'Flag indicating whether the workflow is deleted',
              },
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Work-flows created successfully',
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
          example: 'work-flows created successfully',
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
                    example: 'Automated Data Processing2',
                    description: 'Title of the workflow',
                  },
                  description: {
                    type: 'string',
                    example:
                      'Workflow for automating data processing tasks using Python and SQL.',
                    description: 'Detailed description of the workflow',
                  },
                  technology: {
                    type: 'string',
                    example: 'Python, SQL',
                    description: 'Technologies used in the workflow',
                  },
                  levels: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'beginner',
                    },
                    description: 'Levels of the workflow',
                  },
                  roles: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'data_engineer',
                    },
                    description: 'Roles associated with the workflow',
                  },
                  activity_id: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'act123',
                    },
                    description: 'Array of associated activities',
                  },
                  automation_id: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'auto123',
                    },
                    description: 'Array of associated automation ids',
                  },
                  integration_scenario_id: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: 'int123',
                    },
                    description: 'Array of associated integration scenario ids',
                  },
                  is_deleted: {
                    type: 'boolean',
                    example: false,
                    description:
                      'Flag indicating whether the workflow is deleted',
                  },
                  _id: {
                    type: 'string',
                    example: 'wf_lizns5vun',
                    description: 'Unique identifier for the workflow',
                  },
                },
              },
              description: 'List of created workflows',
            },
            updated: {
              type: 'array',
              items: {
                type: 'object',
              },
              description: 'List of updated workflows',
            },
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to create workflow',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            message: {
              type: 'string',
              example: 'Failed to create workflow',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  @HttpCode(HttpStatus.CREATED)
  async addWorkflows(@Body() createWorkflowsDto: UpsertWorkflowsDto) {
    try {
      const data = await this.workflowsService.upsert(createWorkflowsDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'work-flows created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the work-flows',
        );
      }
    }
  }

  // @Put(':processId/workflows/:workflowId')
  // async updateWorkflow(
  //   @Param('processId') processId: string,
  //   @Param('workflowId') workflowId: string,
  //   @Body() workflowData: any,
  // ): Promise<any> {
  //   return this.workflowsService.updateWorkflow(
  //     processId,
  //     workflowId,
  //     workflowData,
  //   );
  // }

  @Put(':processId/workflows-delete/:workflowId')
  @ApiOperation({ summary: 'Delete workflow' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'workflowId',
    required: true,
    description: 'Workflow ID',
    example: 'wf_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Workflow deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Workflow deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                workflow_id: {
                  type: 'string',
                  example: 'wf_ruyuwn69e',
                  description: 'Workflow id',
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
    description: 'Failed to delete workflow',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete workflow',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('workflowId') workflowId: string,
  ) {
    try {
      const archiveData =
        await this.workflowsService.getByProcessById(processId);

      const result = await this.workflowsService.updateWorkflowsIsDeleted(
        processId,
        workflowId,
      );
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'workflows deleted successfully',
        data: {
          processId: processId,
          workflowId: workflowId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the workflows',
        );
      }
    }
  }

  // @Put(':processId/workflows-soft-delete/:workflowId')
  // async updateWorkflowsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('workflowId') workflowId: string,
  // ) {
  //   return this.workflowsService.updateWorkflowsIsSoftDeleted(
  //     processId,
  //     workflowId,
  //   );
  // }
}
