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
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import {
  AutomationScenarioDto,
  UpsertAutomationScenarioDto,
} from './dto/automation-scenarios.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Automation-process')
@Controller('v1/process')
export class AutomationScenarioController {
  constructor(
    private readonly automationScenarioService: AutomationScenarioService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('automation-scenario')
  @ApiOperation({ summary: 'Post automation scenario' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: '6667e1246e91ff27e948a0e9',
          description: 'Identifier for the activity',
        },
        automation_scenario: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Automated testing',
                description: 'Automated testing',
              },
              title: {
                type: 'string',
                example: 'Sample Automation Scenario',
                description: 'Sample Automation Scenario',
              },
              desc: {
                type: 'string',
                example:
                  'This scenario automates the testing of a new feature.',
                description:
                  'This scenario automates the testing of a new feature.',
              },
              technology: {
                type: 'string',
                example:
                  'This scenario automates the testing of a new feature.',
                description:
                  'This scenario automates the testing of a new feature.',
              },
              last_modified_by: {
                type: 'string',
                example:
                  'This scenario automates the testing of a new feature.',
                description:
                  'This scenario automates the testing of a new feature.',
              },
              activity_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'activity1',
                },
                description: 'Array of activities',
              },
              mdo_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'mdo1',
                },
                description: 'Array of mdo ids',
              },
              integration_scenario_id: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'integration1',
                },
                description: 'Array of integration ids',
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
    description: 'AutomationScenario created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'AutomationScenario created successfully',
            },
            data: {
              type: 'object',
              properties: {
                created: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      type: { type: 'string', example: 'Automated Testing' },
                      title: {
                        type: 'string',
                        example: 'Sample Automation Scenario',
                      },
                      desc: {
                        type: 'string',
                        example:
                          'This scenario automates the testing of a new feature.',
                      },
                      technology: { type: 'string', example: 'Selenium' },
                      activity_id: {
                        type: 'array',
                        items: { type: 'string', example: 'activity1' },
                      },
                      mdo_id: {
                        type: 'array',
                        items: { type: 'string', example: 'mdo1' },
                      },
                      integration_scenario_id: {
                        type: 'array',
                        items: { type: 'string', example: 'integration1' },
                      },
                      is_deleted: { type: 'boolean', example: false },
                      _id: { type: 'string', example: 'as_oh0ykw7az' },
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
          message: 'AutomationScenario created successfully',
          data: {
            created: [
              {
                type: 'Automated Testing',
                title: 'Sample Automation Scenario',
                desc: 'This scenario automates the testing of a new feature.',
                technology: 'Selenium',
                activity_id: ['activity1', 'activity2', 'activity3'],
                mdo_id: ['mdo1', 'mdo2', 'mdo3'],
                integration_scenario_id: [
                  'integration1',
                  'integration2',
                  'integration3',
                ],
                is_deleted: false,
                _id: 'as_oh0ykw7az',
              },
              {
                type: 'Automated Testing',
                title: 'Sample Automation Scenario',
                desc: 'This scenario automates the testing of a new feature.',
                technology: 'Selenium',
                activity_id: ['activity1', 'activity2', 'activity3'],
                mdo_id: ['mdo1', 'mdo2', 'mdo3'],
                integration_scenario_id: [
                  'integration1',
                  'integration2',
                  'integration3',
                ],
                is_deleted: false,
                _id: 'as_zniw2jwwk',
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
    description: 'Failed to create the automation process',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            message: {
              type: 'string',
              example: 'Failed to create the automation process',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addAutomationScenario(
    @Body() createAutomationScenarioDto: UpsertAutomationScenarioDto,
  ) {
    try {
      const data =
        await this.automationScenarioService.upsertAutomationScenario(
          createAutomationScenarioDto,
        );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AutomationScenario created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the automationScenario',
        );
      }
    }
  }

  @Put(':processId/automation-scenario-delete/:automationScenarioId')
  @ApiOperation({ summary: 'Delete Automation scenario' })
  @ApiParam({
    name: 'automationScenarioId',
    type: 'string',
    description: 'Enter automation scenario ID',
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
    description: 'Automation scenario deleted',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Automation scenario deleted',
            },
            data: {
              type: 'object',
              properties: {
                _id: {
                  type: 'string',
                  example: '6667e1246e91ff27e948a0e9',
                  description: 'Process id',
                },
                automation_scenario_id: {
                  type: 'string',
                  example: 'as_oh0ykw7az',
                  description: 'Automation scenario id',
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
    description: 'Failed to delete automation scenario',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete automation scenario',
            },
          },
        },
      },
    },
  })
  @ResponseHandler()
  async updateAutomationScenarioIsDeleted(
    @Param('processId') processId: string,
    @Param('automationScenarioId') automationScenarioId: string,
  ) {
    try {
      const archiveData =
        await this.automationScenarioService.getByProcessById(processId);

      const result =
        await this.automationScenarioService.updateAutomationScenarioIsDeleted(
          processId,
          automationScenarioId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'AutomationScenario deleted successfully',
        data: {
          processId: processId,
          automationScenarioId: automationScenarioId,
        },
        // data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the automationScenario',
        );
      }
    }
  }

  // @Put(':processId/automation-scenario/:automationScenarioId')
  // async updateAutomationScenarioIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('automationScenarioId') automationScenarioId: string,
  // ) {
  //   return this.automationScenarioService.updateAutomationScenarioIsSoftDeleted(
  //     processId,
  //     automationScenarioId,
  //   );
  // }
}
