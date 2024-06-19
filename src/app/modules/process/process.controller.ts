import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { ProcessService } from './process.service';
import {
  CreateProcessDataDto,
  CreateProcessDto,
  CreateProcessResponseDto,
} from './dto/process.dto';
import { Process } from './process.schema';
import { ProcessArchiveService } from '../archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorators/http-response-handler.decorator';

@ApiTags('Process')
@Controller('v1/process')
export class ProcessController {
  constructor(
    private readonly processService: ProcessService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Post process' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        function_id: {
          type: 'string',
          example: 'F004',
          description: 'Function identifier',
        },
        sub_function_id: {
          type: 'string',
          example: 'SF004',
          description: 'Sub-function identifier',
        },
        title: {
          type: 'string',
          example: 'Process Title',
          description: 'Title of the process',
        },
        version_type: {
          type: 'string',
          example: 'Final',
          description: 'Type of the version',
        },
        version_id: {
          type: 'string',
          example: 'v4.0',
          description: 'Version identifier',
        },
        sop_reference: {
          type: 'string',
          example: 'SOP12675',
          description: 'SOP reference number',
        },
        owner_name: {
          type: 'string',
          example: 'John Doe',
          description: 'Name of the process owner',
        },
        owner_role_designation: {
          type: 'string',
          example: 'Process Owner',
          description: 'Role designation of the process owner',
        },
        release_status: {
          type: 'string',
          example: 'Released',
          description: 'Release status',
        },
        description: {
          type: 'string',
          example: 'Detailed description of the process.',
          description: 'Description of the process',
        },
        trigger: {
          type: 'string',
          example: 'Trigger event description',
          description: 'Description of the trigger event',
        },
        created_by: {
          type: 'string',
          example: 'Admin',
          description: 'Creator of the process',
        },
        io_info: {
          type: 'object',
          properties: {
            inputs: {
              type: 'string',
              example: '',
              description: 'Input information',
            },
            outputs: {
              type: 'string',
              example: '',
              description: 'Output information',
            },
            business_outcome: {
              type: 'string',
              example: '',
              description: 'Business outcome',
            },
            major_requirements: {
              type: 'string',
              example: '',
              description: 'Major requirements',
            },
          },
        },
        activities: {
          type: 'array',
          items: { type: 'object' },
          example: [],
          description: 'List of activities',
        },
        control_and_monitoring: {
          type: 'object',
          properties: {
            workflows: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'Workflows',
            },
            kpis: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'KPIs',
            },
            reports: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'Reports',
            },
            analytical_dashboards: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'Analytical dashboards',
            },
          },
        },
        queries_and_responses: {
          type: 'array',
          items: { type: 'object' },
          example: [],
          description: 'Queries and responses',
        },
        data_management: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              example: '',
              description: 'Data management ID',
            },
          },
        },
        integration_scenario: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              example: '',
              description: 'Integration scenario ID',
            },
          },
        },
        documents: {
          type: 'array',
          items: { type: 'object' },
          example: [],
          description: 'List of documents',
        },
        automation_scenarios: {
          type: 'array',
          items: { type: 'object' },
          example: [],
          description: 'Automation scenarios',
        },
        compliance_scenarios: {
          type: 'object',
          properties: {
            compliance_scenario_data: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'Compliance scenario data',
            },
            audit_trail_scenarios: {
              type: 'array',
              items: { type: 'object' },
              example: [],
              description: 'Audit trail scenarios',
            },
          },
        },
        controls: {
          type: 'array',
          items: { type: 'object' },
          example: [],
          description: 'Controls',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Process created successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 201 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Process created successfully',
            },
            data: {
              type: 'object',
              properties: {
                _id: { type: 'string', example: '666fbee1fa4e998d0856e133' },
                function_id: {
                  type: 'array',
                  items: { type: 'string', example: 'F004' },
                },
                sub_function_id: {
                  type: 'array',
                  items: { type: 'string', example: 'SF004' },
                },
                title: { type: 'string', example: 'Process Title' },
                version_type: { type: 'string', example: 'Final' },
                version_id: { type: 'string', example: 'v4.0' },
                sop_reference: { type: 'string', example: 'SOP12675' },
                owner_name: { type: 'string', example: 'John Doe' },
                owner_role_designation: {
                  type: 'string',
                  example: 'Process Owner',
                },
                release_status: { type: 'string', example: 'Released' },
                description: {
                  type: 'string',
                  example: 'Detailed description of the process.',
                },
                trigger: {
                  type: 'string',
                  example: 'Trigger event description',
                },
                created_by: { type: 'string', example: 'Admin' },
                is_deleted: { type: 'boolean', example: false },
                io_info: {
                  type: 'object',
                  properties: {
                    inputs: { type: 'string', example: '' },
                    outputs: { type: 'string', example: '' },
                    business_outcome: { type: 'string', example: '' },
                    major_requirements: { type: 'string', example: '' },
                  },
                },
                activities: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                control_and_monitoring: {
                  type: 'object',
                  properties: {
                    workflows: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    kpis: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    reports: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    analytical_dashboards: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                  },
                },
                queries_and_responses: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                data_management: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string', example: '' },
                  },
                },
                integration_scenario: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string', example: '' },
                  },
                },
                documents: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                automation_scenarios: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                compliance_scenarios: {
                  type: 'object',
                  properties: {
                    compliance_scenario_data: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    audit_trail_scenarios: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                  },
                },
                controls: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                created_on: {
                  type: 'string',
                  example: '2024-06-17T04:43:13.468Z',
                },
                __v: { type: 'number', example: 0 },
              },
            },
          },
        },
        example: {
          statusCode: 201,
          success: true,
          message: 'Process created successfully',
          data: {
            _id: '666fbee1fa4e998d0856e133',
            function_id: ['F004'],
            sub_function_id: ['SF004'],
            title: 'Process Title',
            version_type: 'Final',
            version_id: 'v4.0',
            sop_reference: 'SOP12675',
            owner_name: 'John Doe',
            owner_role_designation: 'Process Owner',
            release_status: 'Released',
            description: 'Detailed description of the process.',
            trigger: 'Trigger event description',
            created_by: 'Admin',
            is_deleted: false,
            io_info: {
              inputs: '',
              outputs: '',
              business_outcome: '',
              major_requirements: '',
            },
            activities: [],
            control_and_monitoring: {
              workflows: [],
              kpis: [],
              reports: [],
              analytical_dashboards: [],
            },
            queries_and_responses: [],
            data_management: {
              _id: '',
            },
            integration_scenario: {
              _id: '',
            },
            documents: [],
            automation_scenarios: [],
            compliance_scenarios: {
              compliance_scenario_data: [],
              audit_trail_scenarios: [],
            },
            controls: [],
            created_on: '2024-06-17T04:43:13.468Z',
            __v: 0,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to create process',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to create process',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async createProcess(@Body() createProcessDto: CreateProcessDto) {
    try {
      const data = await this.processService.createProcess(createProcessDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Process created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the Process');
      }
    }
  }

  // @Post()
  // @ApiOperation({ summary: 'Post process' })
  // @ApiBody({ type: CreateProcessDto })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Process created successfully',
  //   type: CreateProcessResponseDto,
  // })
  // @ApiResponse({
  //   status: 500,
  //   description: 'Failed to create process',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'object',
  //         properties: {
  //           statusCode: { type: 'number', example: 500 },
  //           success: { type: 'boolean', example: false },
  //           error: {
  //             type: 'string',
  //             example: 'Failed to create process',
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // @HttpResponse()
  // async createProcess(@Body() createProcessDto: CreateProcessDataDto) {
  //   try {
  //     const data = await this.processService.createProcess(createProcessDto);
  //     return {
  //       statusCode: HttpStatus.CREATED,
  //       success: true,
  //       message: 'Process created successfully',
  //       data: data,
  //     };
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       throw new NotFoundException(error.message);
  //     } else if (error instanceof BadRequestException) {
  //       throw new BadRequestException(error.message);
  //     } else {
  //       throw new InternalServerErrorException('Failed to create the Process');
  //     }
  //   }
  // }

  @Get()
  @ApiOperation({ summary: 'Get all process' })
  @ApiResponse({
    status: 200,
    description: 'Processes retrieved successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Processes retrieved successfully',
            },
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: { type: 'string', example: '666fbee1fa4e998d0856e133' },
                  function_id: {
                    type: 'array',
                    items: { type: 'string', example: 'F004' },
                  },
                  sub_function_id: {
                    type: 'array',
                    items: { type: 'string', example: 'SF004' },
                  },
                  title: { type: 'string', example: 'Process Title' },
                  version_type: { type: 'string', example: 'Final' },
                  version_id: { type: 'string', example: 'v4.0' },
                  sop_reference: { type: 'string', example: 'SOP12675' },
                  owner_name: { type: 'string', example: 'John Doe' },
                  owner_role_designation: {
                    type: 'string',
                    example: 'Process Owner',
                  },
                  release_status: { type: 'string', example: 'Released' },
                  description: {
                    type: 'string',
                    example: 'Detailed description of the process.',
                  },
                  trigger: {
                    type: 'string',
                    example: 'Trigger event description',
                  },
                  created_by: { type: 'string', example: 'Admin' },
                  is_deleted: { type: 'boolean', example: false },
                  io_info: {
                    type: 'object',
                    properties: {
                      inputs: { type: 'string', example: '' },
                      outputs: { type: 'string', example: '' },
                      business_outcome: { type: 'string', example: '' },
                      major_requirements: { type: 'string', example: '' },
                    },
                  },
                  activities: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [],
                  },
                  control_and_monitoring: {
                    type: 'object',
                    properties: {
                      workflows: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                      kpis: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                      reports: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                      analytical_dashboards: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                    },
                  },
                  queries_and_responses: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [],
                  },
                  data_management: {
                    type: 'object',
                    properties: {
                      _id: { type: 'string', example: '' },
                    },
                  },
                  integration_scenario: {
                    type: 'object',
                    properties: {
                      _id: { type: 'string', example: '' },
                    },
                  },
                  documents: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [],
                  },
                  automation_scenarios: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [],
                  },
                  compliance_scenarios: {
                    type: 'object',
                    properties: {
                      compliance_scenario_data: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                      audit_trail_scenarios: {
                        type: 'array',
                        items: { type: 'object' },
                        example: [],
                      },
                    },
                  },
                  controls: {
                    type: 'array',
                    items: { type: 'object' },
                    example: [],
                  },
                  created_on: {
                    type: 'string',
                    example: '2024-06-17T04:43:13.468Z',
                  },
                  __v: { type: 'number', example: 0 },
                },
              },
            },
          },
        },
        example: {
          statusCode: 200,
          success: true,
          message: 'Processes retrieved successfully',
          data: [
            {
              _id: '666fbee1fa4e998d0856e133',
              function_id: ['F004'],
              sub_function_id: ['SF004'],
              title: 'Process Title',
              version_type: 'Final',
              version_id: 'v4.0',
              sop_reference: 'SOP12675',
              owner_name: 'John Doe',
              owner_role_designation: 'Process Owner',
              release_status: 'Released',
              description: 'Detailed description of the process.',
              trigger: 'Trigger event description',
              created_by: 'Admin',
              is_deleted: false,
              io_info: {
                inputs: '',
                outputs: '',
                business_outcome: '',
                major_requirements: '',
              },
              activities: [],
              control_and_monitoring: {
                workflows: [],
                kpis: [],
                reports: [],
                analytical_dashboards: [],
              },
              queries_and_responses: [],
              data_management: {
                _id: '',
              },
              integration_scenario: {
                _id: '',
              },
              documents: [],
              automation_scenarios: [],
              compliance_scenarios: {
                compliance_scenario_data: [],
                audit_trail_scenarios: [],
              },
              controls: [],
              created_on: '2024-06-17T04:43:13.468Z',
              __v: 0,
            },
          ],
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to get all process',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to get all process',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async getAll(): Promise<any> {
    const data = await this.processService.getAllProcess();
    try {
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Processes retrieved successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to retrieved the Process',
        );
      }
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get process by id' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '666fbee1fa4e998d0856e133',
  })
  @ApiResponse({
    status: 200,
    description: 'Process retrieved successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example: 'Process retrieved successfully',
            },
            data: {
              type: 'object',
              properties: {
                _id: { type: 'string', example: '666fbee1fa4e998d0856e133' },
                function_id: {
                  type: 'array',
                  items: { type: 'string', example: 'F004' },
                },
                sub_function_id: {
                  type: 'array',
                  items: { type: 'string', example: 'SF004' },
                },
                title: { type: 'string', example: 'Process Title' },
                version_type: { type: 'string', example: 'Final' },
                version_id: { type: 'string', example: 'v4.0' },
                sop_reference: { type: 'string', example: 'SOP12675' },
                owner_name: { type: 'string', example: 'John Doe' },
                owner_role_designation: {
                  type: 'string',
                  example: 'Process Owner',
                },
                release_status: { type: 'string', example: 'Released' },
                description: {
                  type: 'string',
                  example: 'Detailed description of the process.',
                },
                trigger: {
                  type: 'string',
                  example: 'Trigger event description',
                },
                created_by: { type: 'string', example: 'Admin' },
                is_deleted: { type: 'boolean', example: false },
                io_info: {
                  type: 'object',
                  properties: {
                    inputs: { type: 'string', example: '' },
                    outputs: { type: 'string', example: '' },
                    business_outcome: { type: 'string', example: '' },
                    major_requirements: { type: 'string', example: '' },
                  },
                },
                activities: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                control_and_monitoring: {
                  type: 'object',
                  properties: {
                    workflows: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    kpis: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    reports: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    analytical_dashboards: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                  },
                },
                queries_and_responses: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                data_management: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string', example: '' },
                  },
                },
                integration_scenario: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string', example: '' },
                  },
                },
                documents: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                automation_scenarios: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                compliance_scenarios: {
                  type: 'object',
                  properties: {
                    compliance_scenario_data: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                    audit_trail_scenarios: {
                      type: 'array',
                      items: { type: 'object' },
                      example: [],
                    },
                  },
                },
                controls: {
                  type: 'array',
                  items: { type: 'object' },
                  example: [],
                },
                created_on: {
                  type: 'string',
                  example: '2024-06-17T04:43:13.468Z',
                },
                __v: { type: 'number', example: 0 },
              },
            },
          },
        },
        example: {
          statusCode: 200,
          success: true,
          message: 'Process retrieved successfully',
          data: {
            _id: '666fbee1fa4e998d0856e133',
            function_id: ['F004'],
            sub_function_id: ['SF004'],
            title: 'Process Title',
            version_type: 'Final',
            version_id: 'v4.0',
            sop_reference: 'SOP12675',
            owner_name: 'John Doe',
            owner_role_designation: 'Process Owner',
            release_status: 'Released',
            description: 'Detailed description of the process.',
            trigger: 'Trigger event description',
            created_by: 'Admin',
            is_deleted: false,
            io_info: {
              inputs: '',
              outputs: '',
              business_outcome: '',
              major_requirements: '',
            },
            activities: [],
            control_and_monitoring: {
              workflows: [],
              kpis: [],
              reports: [],
              analytical_dashboards: [],
            },
            queries_and_responses: [],
            data_management: {
              _id: '',
            },
            integration_scenario: {
              _id: '',
            },
            documents: [],
            automation_scenarios: [],
            compliance_scenarios: {
              compliance_scenario_data: [],
              audit_trail_scenarios: [],
            },
            controls: [],
            created_on: '2024-06-17T04:43:13.468Z',
            __v: 0,
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to get process',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to get process',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async getById(@Param('id') id: string): Promise<any> {
    try {
      const data = await this.processService.getProcessById(id);
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Process retrieved successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to retrieved the Process',
        );
      }
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete process by id' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '666fbee1fa4e998d0856e133',
  })
  @ApiResponse({
    status: 200,
    description: 'Process deleted successfully',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 200 },
            success: { type: 'boolean', example: true },
            message: {
              type: 'string',
              example:
                'processId: 666fbee1fa4e998d0856e133 deleted successfully',
            },
            data: {
              type: 'object',
              properties: {
                processId: {
                  type: 'string',
                  example: '666fbee1fa4e998d0856e133',
                },
              },
            },
          },
        },
        example: {
          statusCode: 200,
          success: true,
          message: 'processId: 666fbee1fa4e998d0856e133 deleted successfully',
          data: {
            processId: '666fbee1fa4e998d0856e133',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete process',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete process',
            },
          },
        },
      },
    },
  })
  @HttpResponse()
  async delete(@Param('id') id: string): Promise<any> {
    try {
      const archiveData = await this.processService.getByProcessById(id);

      const result = await this.processService.deleteProcess(id);
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: `processId: ${id} deleted successfully`,
        data: { processId: id },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the process');
      }
    }
  }

  // @Delete(':id')
  // async softDelete(@Param('id') id: string): Promise<Process> {
  //   return this.processService.softDeleteProcess(id);
  // }
}
