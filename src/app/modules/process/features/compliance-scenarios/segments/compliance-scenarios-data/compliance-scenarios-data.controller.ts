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
import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import {
  ComplianceScenarioDataDto,
  UpsertComplianceScenarioDataDto,
} from './dto/compliance-scenarios-data.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Compliance-scenario')
@Controller('v1/process')
export class ComplianceScenariosDataController {
  constructor(
    private readonly complianceScenariosDataService: ComplianceScenariosDataService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('compliance-scenario-data')
  @ApiOperation({ summary: 'Post Compliance scenario data' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '666d417093b9df8f829b22a3',
          description: 'Identifier for the activity',
        },
        compliance_scenario: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: 'GDPR Compliance 1',
                description: 'GDPR Compliance 1',
              },
              description: {
                type: 'string',
                example:
                  'Scenario for reviewing and ensuring compliance with GDPR regulations.',
                description: 'Description of the scenario',
              },
              attachments: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'file1.pdf',
                },
                description: 'Array of attachments',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'activity123',
                },
                description: 'Array of activities',
              },
              automation_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'automation123',
                },
                description: 'Array of automation ids',
              },
              integration_scenario_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'integration123',
                },
                description: 'Array of integration scenario ids',
              },
              last_modified_by: {
                type: 'string',
                example: 'user456',
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
    description: 'ComplianceScenario created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'ComplianceScenario created successfully',
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
                        example: 'GDPR Compliance 1',
                      },
                      description: {
                        type: 'string',
                        example:
                          'Scenario for reviewing and ensuring compliance with GDPR regulations.',
                      },
                      attachments: {
                        type: 'array',
                        items: { type: 'string', example: 'file1.pdf' },
                      },
                      activity_id: {
                        type: 'array',
                        items: { type: 'string', example: 'activity123' },
                      },
                      automation_id: {
                        type: 'array',
                        items: { type: 'string', example: 'automation123' },
                      },
                      integration_scenario_id: {
                        type: 'array',
                        items: { type: 'string', example: 'integration123' },
                      },
                      is_deleted: { type: 'boolean', example: false },
                      _id: { type: 'string', example: 'cs_6fqzgve8u' },
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
          message: 'ComplianceScenario created successfully',
          data: {
            created: [
              {
                title: 'GDPR Compliance 1',
                description:
                  'Scenario for reviewing and ensuring compliance with GDPR regulations.',
                attachments: ['file1.pdf', 'file2.docx', 'file3.xlsx'],
                activity_id: ['activity123', 'activity456', 'activity789'],
                automation_id: ['automation123', 'automation456'],
                integration_scenario_id: [
                  'integration123',
                  'integration456',
                  'integration789',
                ],
                is_deleted: false,
                _id: 'cs_6fqzgve8u',
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
    description: 'Failed to delete compliance scenario',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete compliance scenario',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addComplianceScenariosData(
    @Body() createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto,
  ) {
    try {
      const data =
        await this.complianceScenariosDataService.upsertComplianceScenariosData(
          createComplianceScenarioDataDto,
        );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'ComplianceScenario created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the ComplianceScenario',
        );
      }
    }
  }

  // @Put(':processId/compliance-scenario-data/:complianceScenarioDataId')
  // async updateComplianceScenariosData(
  //   @Param('processId') processId: string,
  //   @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  //   @Body() complianceScenarioDataDto: any,
  // ): Promise<any> {
  //   return this.complianceScenariosDataService.updateComplianceScenariosData(
  //     processId,
  //     complianceScenarioDataId,
  //     complianceScenarioDataDto,
  //   );
  // }

  @Put(':processId/compliance-scenario-data-delete/:complianceScenarioDataId')
  @ApiOperation({ summary: 'Delete Compliance scenario' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'complainceScenarioId',
    required: true,
    description: 'Compliance Scenarios ID',
    example: 'cs_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Compliance scenario deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Compliance scenario deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                compliance_scenario_id: {
                  type: 'string',
                  example: 'cs_ruyuwn69e',
                  description: 'Compliance scenario id',
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
  @ResponseHandler()
  async updateComplianceScenariosDataIsDeleted(
    @Param('processId') processId: string,
    @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  ) {
    try {
      const archiveData =
        await this.complianceScenariosDataService.getByProcessById(processId);

      const result =
        await this.complianceScenariosDataService.updateComplianceScenariosDataIsDeleted(
          processId,
          complianceScenarioDataId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'ComplianceScenarios deleted successfully',
        data: {
          processId: processId,
          complianceScenarioDataId: complianceScenarioDataId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the ComplianceScenarios',
        );
      }
    }
  }

  // @Put(
  //   ':processId/compliance-scenario-data-soft-delete/:complianceScenarioDataId',
  // )
  // async updateComplianceScenariosDataIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  // ) {
  //   return this.complianceScenariosDataService.updateComplianceScenariosDataIsSoftDeleted(
  //     processId,
  //     complianceScenarioDataId,
  //   );
  // }
}
