import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IntegrationScenarioService } from './integration-scenarios.service';
import {
  IntegrationProcessResponseDTO,
  UpdateIntegrationScenarioDataDto,
  UpdateIntegrationScenarioDto,
} from './dto/integration-scenarios.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Integration-scenarios')
@Controller('v1/process')
export class IntegrationScenarioController {
  constructor(
    private readonly integrationScenarioService: IntegrationScenarioService,
  ) {}

  @Put(':processId/integration-scenario')
  @ApiOperation({ summary: 'Delete integration scenario' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiBody({ type: UpdateIntegrationScenarioDataDto })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Updated data response',
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       updatedData: {
  //         type: 'object',
  //         properties: {
  //           _id: { type: 'string', example: '666d417093b9df8f829b22a3' },
  //           function_id: {
  //             type: 'array',
  //             items: { type: 'string' },
  //             example: ['F004'],
  //           },
  //           sub_function_id: {
  //             type: 'array',
  //             items: { type: 'string' },
  //             example: ['SF004'],
  //           },
  //           title: { type: 'string', example: 'Process Title' },
  //           version_type: { type: 'string', example: 'Final' },
  //           version_id: { type: 'string', example: 'v4.0' },
  //           sop_reference: { type: 'string', example: 'SOP12675' },
  //           owner_name: { type: 'string', example: 'John Doe' },
  //           owner_role_designation: {
  //             type: 'string',
  //             example: 'Process Owner',
  //           },
  //           release_status: { type: 'string', example: 'Released' },
  //           description: {
  //             type: 'string',
  //             example: 'Detailed description of the process.',
  //           },
  //           trigger: { type: 'string', example: 'Trigger event description' },
  //           created_by: { type: 'string', example: 'Admin' },
  //           is_deleted: { type: 'boolean', example: false },
  //           io_info: {
  //             type: 'object',
  //             properties: {
  //               inputs: { type: 'string', example: '11' },
  //               outputs: { type: 'string', example: '11' },
  //               business_outcome: { type: 'string', example: '11' },
  //               major_requirements: { type: 'string', example: '11' },
  //             },
  //           },
  //           activities: {
  //             type: 'array',
  //             items: {
  //               type: 'object',
  //               properties: {
  //                 _id: { type: 'string', example: 'activity_m5eo8w181' },
  //                 sr_no: { type: 'number', example: 1 },
  //                 description: { type: 'string', example: '1' },
  //                 performed_at: { type: 'string', example: '1' },
  //                 performed_by: { type: 'string', example: '1' },
  //                 performed_where: { type: 'string', example: '1' },
  //               },
  //             },
  //           },
  //           control_and_monitoring: {
  //             type: 'object',
  //             properties: {
  //               workflows: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     _id: { type: 'string', example: 'wf_9r1xmc7uk' },
  //                     title: { type: 'string', example: '11' },
  //                     levels: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['beginner'],
  //                     },
  //                     roles: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['beginner'],
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['beginner'],
  //                     },
  //                     automation_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['beginner'],
  //                     },
  //                     integration_scenario_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['beginner'],
  //                     },
  //                     description: { type: 'string', example: '1' },
  //                     technology: { type: 'string', example: '1' },
  //                     is_deleted: { type: 'boolean', example: false },
  //                   },
  //                 },
  //               },
  //               kpis: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     title: {
  //                       type: 'string',
  //                       example: 'Monthly Sales Growth',
  //                     },
  //                     description: {
  //                       type: 'string',
  //                       example:
  //                         'Measures the monthly growth in sales revenue.',
  //                     },
  //                     calculation_logic: {
  //                       type: 'string',
  //                       example:
  //                         'Current month sales - Previous month sales / Previous month sales * 100',
  //                     },
  //                     complexity_level: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Medium'],
  //                     },
  //                     role: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Sales Manager', 'Analyst'],
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['activity1', 'activity2'],
  //                     },
  //                     value: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['test'],
  //                     },
  //                     bench_mark: { type: 'string', example: 'test' },
  //                     _id: { type: 'string', example: 'kpis_3l251ajxa' },
  //                   },
  //                 },
  //               },
  //               reports: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     title: {
  //                       type: 'string',
  //                       example: 'Report Financial Report',
  //                     },
  //                     description: {
  //                       type: 'string',
  //                       example:
  //                         'A detailed report of the financial performance for the quarter.',
  //                     },
  //                     attachments: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['financial-summary.pdf', 'charts.xlsx'],
  //                     },
  //                     complexity_level: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['High'],
  //                     },
  //                     calculation_logic: {
  //                       type: 'string',
  //                       example:
  //                         'Current month sales - Previous month sales / Previous month sales * 100',
  //                     },
  //                     type: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Financial', 'Performance'],
  //                     },
  //                     application: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Excel', 'PowerBI'],
  //                     },
  //                     source_data: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['ERP', 'Accounting System'],
  //                     },
  //                     role: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Financial Analyst', 'CFO'],
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['activity1', 'activity2'],
  //                     },
  //                     _id: { type: 'string', example: 'report_li2jrnnin' },
  //                   },
  //                 },
  //               },
  //               analytical_dashboards: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     title: {
  //                       type: 'string',
  //                       example: 'analytical Dashboard',
  //                     },
  //                     description: {
  //                       type: 'string',
  //                       example:
  //                         'A comprehensive dashboard for sales analytics.',
  //                     },
  //                     calculation_logic: {
  //                       type: 'string',
  //                       example:
  //                         'Current month sales - Previous month sales / Previous month sales * 100',
  //                     },
  //                     attachments: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['report.pdf', 'chart.png'],
  //                     },
  //                     complexity_level: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['High'],
  //                     },
  //                     type: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Analytical', 'Strategic'],
  //                     },
  //                     dashboard_application: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['PowerBI', 'Tableau'],
  //                     },
  //                     source_data: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['CRM', 'ERP'],
  //                     },
  //                     role: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['Analyst', 'Manager'],
  //                     },
  //                     application: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['test', 'test2'],
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['activity1', 'activity2'],
  //                     },
  //                     _id: { type: 'string', example: 'ad_r5vnypwae' },
  //                     is_deleted: { type: 'boolean', example: false },
  //                   },
  //                 },
  //               },
  //             },
  //           },
  //           queries_and_responses: {
  //             type: 'array',
  //             items: {
  //               type: 'object',
  //               properties: {
  //                 query: { type: 'string', example: 'What is NestJS?' },
  //                 response: {
  //                   type: 'string',
  //                   example: 'NestJS is a progressive Node.js framework.',
  //                 },
  //                 _id: { type: 'string', example: 'qr_eas75e3zu' },
  //               },
  //             },
  //           },
  //           data_management: {
  //             type: 'object',
  //             properties: {
  //               _id: { type: 'string', example: '1234567890abcdef' },
  //               title: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Data Management Example'],
  //               },
  //               transaction_volumes: {
  //                 type: 'object',
  //                 properties: {
  //                   average_transactions_year: {
  //                     type: 'string',
  //                     example: '12000',
  //                   },
  //                   maximum_transactions_month: {
  //                     type: 'string',
  //                     example: '1500',
  //                   },
  //                   maximum_transactions_day: { type: 'string', example: '50' },
  //                   average_line_items: { type: 'string', example: '10' },
  //                 },
  //               },
  //               data_security: { type: 'string', example: 'High' },
  //               data_retention: { type: 'string', example: '5 years' },
  //               data_residency: { type: 'string', example: 'USA' },
  //             },
  //           },
  //           integration_scenario: {
  //             type: 'object',
  //             properties: {
  //               title: {
  //                 type: 'string',
  //                 example: 'Integration Scenario Title',
  //               },
  //               description: {
  //                 type: 'string',
  //                 example: 'Description of the integration scenario.',
  //               },
  //               data_provider: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Provider1', 'Provider2'],
  //               },
  //               data_consumer: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Consumer1', 'Consumer2'],
  //               },
  //               api_provider: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['APIProvider1', 'APIProvider2'],
  //               },
  //               calling_system: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['System1', 'System2'],
  //               },
  //               type: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Type1', 'Type2'],
  //               },
  //               data_volume_year: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['1000GB', '2000GB'],
  //               },
  //               mode: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Mode1', 'Mode2'],
  //               },
  //               data_type: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['DataType1', 'DataType2'],
  //               },
  //               protocol: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Protocol1', 'Protocol2'],
  //               },
  //               tool: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Tool1', 'Tool2'],
  //               },
  //               data_record_size: { type: 'string', example: '10MB' },
  //               yoy_data_growth: { type: 'string', example: '5%' },
  //               data_provider_authentication: {
  //                 type: 'string',
  //                 example: 'OAuth2',
  //               },
  //               data_consumer_authentication: {
  //                 type: 'string',
  //                 example: 'BasicAuth',
  //               },
  //               activity_id: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['Activity1', 'Activity2'],
  //               },
  //               mdo_id: {
  //                 type: 'array',
  //                 items: { type: 'string' },
  //                 example: ['MDO1', 'MDO2'],
  //               },
  //             },
  //           },
  //           documents: {
  //             type: 'array',
  //             items: {
  //               type: 'object',
  //               properties: {
  //                 title: { type: 'string', example: 'Sample Document Title' },
  //                 desc: {
  //                   type: 'string',
  //                   example: 'This is a sample description of the document.',
  //                 },
  //                 type: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['type1', 'type2'],
  //                 },
  //                 source: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['source1', 'source2'],
  //                 },
  //                 number_range: { type: 'string', example: '100-200' },
  //                 storage_requirements: {
  //                   type: 'string',
  //                   example: 'Store in a cool, dry place',
  //                 },
  //                 attachments: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['attachment1', 'attachment2'],
  //                 },
  //                 activity_id: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['activity1', 'activity2'],
  //                 },
  //                 is_deleted: { type: 'boolean', example: false },
  //                 _id: { type: 'string', example: 'pd_kuclxi9j6' },
  //               },
  //             },
  //           },
  //           automation_scenarios: {
  //             type: 'array',
  //             items: { type: 'object' },
  //           },
  //           compliance_scenarios: {
  //             type: 'object',
  //             properties: {
  //               compliance_scenario_data: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     title: { type: 'string', example: 'GDPR Compliance 1' },
  //                     description: {
  //                       type: 'string',
  //                       example:
  //                         'Scenario for reviewing and ensuring compliance with GDPR regulations.',
  //                     },
  //                     attachments: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['file1.pdf', 'file2.docx', 'file3.xlsx'],
  //                     },
  //                     activity_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['activity123', 'activity456', 'activity789'],
  //                     },
  //                     automation_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: ['automation123', 'automation456'],
  //                     },
  //                     integration_scenario_id: {
  //                       type: 'array',
  //                       items: { type: 'string' },
  //                       example: [
  //                         'integration123',
  //                         'integration456',
  //                         'integration789',
  //                       ],
  //                     },
  //                     is_deleted: { type: 'boolean', example: false },
  //                     _id: { type: 'string', example: 'cs_6fqzgve8u' },
  //                   },
  //                 },
  //               },
  //               audit_trail_scenarios: {
  //                 type: 'array',
  //                 items: { type: 'object' },
  //               },
  //             },
  //           },
  //           controls: {
  //             type: 'array',
  //             items: {
  //               type: 'object',
  //               properties: {
  //                 title: { type: 'string', example: 'Data Quality 1' },
  //                 description: {
  //                   type: 'string',
  //                   example:
  //                     'Ensure the quality and consistency of incoming data.',
  //                 },
  //                 activity_id: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['Act1'],
  //                 },
  //                 mdo_id: {
  //                   type: 'array',
  //                   items: { type: 'string' },
  //                   example: ['mdo456'],
  //                 },
  //                 _id: { type: 'string', example: 'pc_64gl1z60x' },
  //               },
  //             },
  //           },
  //           created_on: { type: 'string', example: '2024-06-15T07:23:28.350Z' },
  //           __v: { type: 'number', example: 32 },
  //           last_modified_by: { type: 'string', example: 'user123' },
  //           last_modified_on: {
  //             type: 'string',
  //             example: '2024-06-15T10:39:24.236Z',
  //           },
  //         },
  //       },
  //       acknowledged: { type: 'boolean', example: true },
  //       modifiedCount: { type: 'number', example: 1 },
  //       upsertedId: { type: 'string', example: '666d417093b9df8f829b22a3' },
  //       upsertedCount: { type: 'number', example: 1 },
  //       matchedCount: { type: 'number', example: 1 },
  //     },
  //   },
  // })
  @ApiResponse({ status: 200, type: IntegrationProcessResponseDTO })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete integration scenario',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            statusCode: { type: 'number', example: 500 },
            success: { type: 'boolean', example: false },
            error: {
              type: 'string',
              example: 'Failed to delete integration scenario',
            },
          },
        },
      },
    },
  })
  async updateIntegrationScenario(
    @Param('processId') processId: string,
    // @Param('integrationScenarioId') integrationScenarioId: string,
    integrationScenarioId: string,
    @Body() updateIntegrationScenarioDto: UpdateIntegrationScenarioDto,
  ): Promise<any> {
    return this.integrationScenarioService.update(
      processId,
      integrationScenarioId,
      updateIntegrationScenarioDto,
    );
  }
}
