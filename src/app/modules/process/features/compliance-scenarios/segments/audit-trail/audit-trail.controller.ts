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
import { AuditTrailScenariosService } from './audit-trail.service';
import { UpsertAuditTrailScenariosDto } from './dto/audit-trail.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Audit-trail')
@Controller('v1/process')
export class AuditTrailScenariosController {
  constructor(
    private readonly auditTrailScenariosService: AuditTrailScenariosService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('audit-trail-scenarios')
  @ApiOperation({ summary: 'Post Audit trail' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '6667e1246e91ff27e948a0e9',
          description: 'Identifier for the activity',
        },
        audit_trail_scenarios: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'System Audit Trail 1',
                description: 'System Audit Trail 1',
              },
              description: {
                type: 'string',
                example:
                  'Scenario for tracking changes and activities in the system for audit purposes.',
                description: 'Description of the scenario',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'activity101',
                },
                description: 'Array of activities',
              },
              automation_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'automation101',
                },
                description: 'Array of automation ids',
              },
              attachments: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'log1.txt',
                },
                description: 'Array of attachments',
              },
              integration_scenario_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'integration101',
                },
                description: 'Array of integration scenario ids',
              },
              role: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'admin',
                },
                description: 'Array of roles',
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
    description: 'AuditTrailScenarios created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'AuditTrailScenarios created successfully',
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
                        example: 'System Audit Trail 1',
                      },
                      description: {
                        type: 'string',
                        example:
                          'Scenario for tracking changes and activities in the system for audit purposes.',
                      },
                      activity_id: {
                        type: 'array',
                        items: { type: 'string', example: 'activity101' },
                      },
                      automation_id: {
                        type: 'array',
                        items: { type: 'string', example: 'automation101' },
                      },
                      attachments: {
                        type: 'array',
                        items: { type: 'string', example: 'log1.txt' },
                      },
                      integration_scenario_id: {
                        type: 'array',
                        items: { type: 'string', example: 'integration101' },
                      },
                      role: {
                        type: 'array',
                        items: { type: 'string', example: 'admin' },
                      },
                      is_deleted: { type: 'boolean', example: false },
                      _id: { type: 'string', example: 'at_ruyuwn69e' },
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
          message: 'AuditTrailScenarios created successfully',
          data: {
            created: [
              {
                title: 'System Audit Trail 1',
                description:
                  'Scenario for tracking changes and activities in the system for audit purposes.',
                activity_id: ['activity101', 'activity202', 'activity303'],
                automation_id: ['automation101', 'automation202'],
                attachments: ['log1.txt', 'log2.txt', 'log3.txt'],
                integration_scenario_id: [
                  'integration101',
                  'integration202',
                  'integration303',
                ],
                role: ['admin', 'auditor'],
                is_deleted: false,
                _id: 'at_ruyuwn69e',
              },
              {
                title: 'System Audit Trail 2',
                description:
                  'Scenario for tracking changes and activities in the system for audit purposes.',
                activity_id: ['activity101', 'activity202', 'activity303'],
                automation_id: ['automation101', 'automation202'],
                attachments: ['log1.txt', 'log2.txt', 'log3.txt'],
                integration_scenario_id: [
                  'integration101',
                  'integration202',
                  'integration303',
                ],
                role: ['admin', 'auditor'],
                is_deleted: false,
                _id: 'at_d807m5n15',
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
    description: 'Failed to create audit trail',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            message: {
              type: 'string',
              example: 'Failed to create audit trail',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async upsertAuditTrailScenarios(
    @Body() createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto,
  ) {
    try {
      const data =
        await this.auditTrailScenariosService.upsertAuditTrailScenarios(
          createAuditTrailScenariosDto,
        );

      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AuditTrailScenarios created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the AuditTrailScenarios',
        );
      }
    }
  }

  // @Put(':processId/audit-trail-scenarios/:auditTrailScenariosId')
  // async updateWorkflow(
  //   @Param('processId') processId: string,
  //   @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  //   @Body() auditTrailScenariosDto: any,
  // ): Promise<any> {
  //   return this.auditTrailScenariosService.updateAuditTrailScenarios(
  //     processId,
  //     auditTrailScenariosId,
  //     auditTrailScenariosDto,
  //   );
  // }

  @Put(':processId/audit-trail-scenarios-delete/:auditTrailScenariosId')
  @ApiOperation({ summary: 'Delete Audit trail' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'auditTrailScenariosId',
    required: true,
    description: 'Audit Trail Scenarios ID',
    example: 'at_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Audit trail deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Audit trail deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                audit_trail_id: {
                  type: 'string',
                  example: 'at_ruyuwn69e',
                  description: 'Audit trail id',
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
    description: 'Failed to delete audit trail',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete audit trail',
            },
          },
        },
      },
    },
  })
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  ) {
    try {
      const archiveData =
        await this.auditTrailScenariosService.getByProcessById(processId);

      const result =
        await this.auditTrailScenariosService.updateAuditTrailScenariosIsDeleted(
          processId,
          auditTrailScenariosId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'AuditTrailScenarios deleted successfully',
        data: {
          processId: processId,
          auditTrailScenariosId: auditTrailScenariosId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the AuditTrailScenarios',
        );
      }
    }
  }

  // @Put(':processId/audit-trail-scenarios-soft-delete/:auditTrailScenariosId')
  // async updateWorkflowsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  // ) {
  //   return this.auditTrailScenariosService.updateAuditTrailScenariosIsSoftDeleted(
  //     processId,
  //     auditTrailScenariosId,
  //   );
  // }
}
