"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManagementController = void 0;
const common_1 = require("@nestjs/common");
const data_management_dto_1 = require("./dto/data-management.dto");
const data_management_service_1 = require("./data-management.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../core/decorators/http-response-handler.decorator");
let DataManagementController = class DataManagementController {
    constructor(dataManagementService) {
        this.dataManagementService = dataManagementService;
    }
    async updateIntegrationScenario(processId, dataManagementId, dataManagementDto) {
        return this.dataManagementService.update(processId, dataManagementId, dataManagementDto);
    }
};
exports.DataManagementController = DataManagementController;
__decorate([
    (0, common_1.Put)(':processId/data-management'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete integration scenario' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                mdo: {
                    type: 'array',
                    items: { type: 'string' },
                    example: ['Data Management Example'],
                },
                transaction_volumes: {
                    type: 'object',
                    properties: {
                        average_transactions_year: { type: 'string', example: '12000' },
                        maximum_transactions_month: { type: 'string', example: '1500' },
                        maximum_transactions_day: { type: 'string', example: '50' },
                        average_line_items: { type: 'string', example: '10' },
                    },
                },
                data_security: {
                    type: 'string',
                    example: 'High',
                    description: 'Data security',
                },
                data_retention: {
                    type: 'string',
                    example: '5 years',
                    description: 'Data retention',
                },
                data_residency: {
                    type: 'string',
                    example: 'USA',
                    description: 'Data residency',
                },
                last_modified_by: {
                    type: 'string',
                    example: 'manthan',
                    description: 'User who last modified the document',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Updated data response',
        schema: {
            type: 'object',
            properties: {
                updatedData: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string', example: '666d417093b9df8f829b22a3' },
                        function_id: {
                            type: 'array',
                            items: { type: 'string' },
                            example: ['F004'],
                        },
                        sub_function_id: {
                            type: 'array',
                            items: { type: 'string' },
                            example: ['SF004'],
                        },
                        title: { type: 'string', example: 'Data management Title' },
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
                        trigger: { type: 'string', example: 'Trigger event description' },
                        created_by: { type: 'string', example: 'Admin' },
                        is_deleted: { type: 'boolean', example: false },
                        io_info: {
                            type: 'object',
                            properties: {
                                inputs: { type: 'string', example: '11' },
                                outputs: { type: 'string', example: '11' },
                                business_outcome: { type: 'string', example: '11' },
                                major_requirements: { type: 'string', example: '11' },
                            },
                        },
                        activities: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    _id: { type: 'string', example: 'activity_m5eo8w181' },
                                    sr_no: { type: 'number', example: 1 },
                                    description: { type: 'string', example: '1' },
                                    performed_at: { type: 'string', example: '1' },
                                    performed_by: { type: 'string', example: '1' },
                                    performed_where: { type: 'string', example: '1' },
                                },
                            },
                        },
                        control_and_monitoring: {
                            type: 'object',
                            properties: {
                                workflows: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            _id: { type: 'string', example: 'wf_9r1xmc7uk' },
                                            title: { type: 'string', example: '11' },
                                            levels: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['beginner'],
                                            },
                                            roles: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['beginner'],
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['beginner'],
                                            },
                                            automation_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['beginner'],
                                            },
                                            integration_scenario_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['beginner'],
                                            },
                                            description: { type: 'string', example: '1' },
                                            technology: { type: 'string', example: '1' },
                                        },
                                    },
                                },
                                kpis: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            title: {
                                                type: 'string',
                                                example: 'Monthly Sales Growth',
                                            },
                                            description: {
                                                type: 'string',
                                                example: 'Measures the monthly growth in sales revenue.',
                                            },
                                            calculation_logic: {
                                                type: 'string',
                                                example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                            },
                                            complexity_level: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Medium'],
                                            },
                                            role: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Sales Manager', 'Analyst'],
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['activity1', 'activity2'],
                                            },
                                            value: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['test'],
                                            },
                                            bench_mark: { type: 'string', example: 'test' },
                                            _id: { type: 'string', example: 'kpis_3l251ajxa' },
                                        },
                                    },
                                },
                                reports: {
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
                                                example: 'A detailed report of the financial performance for the quarter.',
                                            },
                                            attachments: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['financial-summary.pdf', 'charts.xlsx'],
                                            },
                                            complexity_level: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['High'],
                                            },
                                            calculation_logic: {
                                                type: 'string',
                                                example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                            },
                                            type: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Financial', 'Performance'],
                                            },
                                            application: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Excel', 'PowerBI'],
                                            },
                                            source_data: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['ERP', 'Accounting System'],
                                            },
                                            role: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Financial Analyst', 'CFO'],
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['activity1', 'activity2'],
                                            },
                                            _id: { type: 'string', example: 'report_li2jrnnin' },
                                        },
                                    },
                                },
                                analytical_dashboards: {
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
                                                example: 'A comprehensive dashboard for sales analytics.',
                                            },
                                            calculation_logic: {
                                                type: 'string',
                                                example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                            },
                                            attachments: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['report.pdf', 'chart.png'],
                                            },
                                            complexity_level: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['High'],
                                            },
                                            type: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Analytical', 'Strategic'],
                                            },
                                            dashboard_application: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['PowerBI', 'Tableau'],
                                            },
                                            source_data: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['CRM', 'ERP'],
                                            },
                                            role: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['Analyst', 'Manager'],
                                            },
                                            application: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['test', 'test2'],
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['activity1', 'activity2'],
                                            },
                                            is_deleted: { type: 'boolean', example: false },
                                            _id: { type: 'string', example: 'ad_r5vnypwae' },
                                        },
                                    },
                                },
                            },
                        },
                        queries_and_responses: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    query: { type: 'string', example: 'What is NestJS?' },
                                    response: {
                                        type: 'string',
                                        example: 'NestJS is a progressive Node.js framework.',
                                    },
                                    _id: { type: 'string', example: 'qr_eas75e3zu' },
                                },
                            },
                        },
                        data_management: {
                            type: 'object',
                            properties: {
                                _id: { type: 'string', example: '1234567890abcdef' },
                                title: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    example: ['Data Management Example'],
                                },
                                mdo: {
                                    type: 'array',
                                    items: { type: 'string' },
                                    example: ['Data Management Example'],
                                },
                                transaction_volumes: {
                                    type: 'object',
                                    properties: {
                                        average_transactions_year: {
                                            type: 'string',
                                            example: '12000',
                                        },
                                        maximum_transactions_month: {
                                            type: 'string',
                                            example: '1500',
                                        },
                                        maximum_transactions_day: { type: 'string', example: '50' },
                                        average_line_items: { type: 'string', example: '10' },
                                    },
                                },
                                data_security: { type: 'string', example: 'High' },
                                data_retention: { type: 'string', example: '5 years' },
                                data_residency: { type: 'string', example: 'USA' },
                            },
                        },
                        documents: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string', example: 'Sample Document Title' },
                                    desc: {
                                        type: 'string',
                                        example: 'This is a sample description of the document.',
                                    },
                                    type: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['type1', 'type2'],
                                    },
                                    source: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['source1', 'source2'],
                                    },
                                    number_range: { type: 'string', example: '100-200' },
                                    storage_requirements: {
                                        type: 'string',
                                        example: 'Store in a cool, dry place',
                                    },
                                    attachments: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['attachment1', 'attachment2'],
                                    },
                                    activity_id: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['activity1', 'activity2'],
                                    },
                                    is_deleted: { type: 'boolean', example: false },
                                    _id: { type: 'string', example: 'pd_kuclxi9j6' },
                                },
                            },
                        },
                        automation_scenarios: {
                            type: 'array',
                            items: { type: 'object' },
                        },
                        compliance_scenarios: {
                            type: 'object',
                            properties: {
                                compliance_scenario_data: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            title: { type: 'string', example: 'GDPR Compliance 1' },
                                            description: {
                                                type: 'string',
                                                example: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
                                            },
                                            attachments: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['file1.pdf', 'file2.docx', 'file3.xlsx'],
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['activity123', 'activity456', 'activity789'],
                                            },
                                            automation_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: ['automation123', 'automation456'],
                                            },
                                            integration_scenario_id: {
                                                type: 'array',
                                                items: { type: 'string' },
                                                example: [
                                                    'integration123',
                                                    'integration456',
                                                    'integration789',
                                                ],
                                            },
                                            is_deleted: { type: 'boolean', example: false },
                                            _id: { type: 'string', example: 'cs_6fqzgve8u' },
                                        },
                                    },
                                },
                                audit_trail_scenarios: {
                                    type: 'array',
                                    items: { type: 'object' },
                                },
                            },
                        },
                        controls: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    title: { type: 'string', example: 'Data Quality 1' },
                                    description: {
                                        type: 'string',
                                        example: 'Ensure the quality and consistency of incoming data.',
                                    },
                                    activity_id: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['Act1'],
                                    },
                                    mdo_id: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        example: ['mdo456'],
                                    },
                                    _id: { type: 'string', example: 'pc_64gl1z60x' },
                                },
                            },
                        },
                        created_on: { type: 'string', example: '2024-06-15T07:23:28.350Z' },
                        __v: { type: 'number', example: 32 },
                        last_modified_by: { type: 'string', example: 'user123' },
                        last_modified_on: {
                            type: 'string',
                            example: '2024-06-15T10:39:24.236Z',
                        },
                    },
                },
                acknowledged: { type: 'boolean', example: true },
                modifiedCount: { type: 'number', example: 1 },
                upsertedId: { type: 'string', example: '666d417093b9df8f829b22a3' },
                upsertedCount: { type: 'number', example: 1 },
                matchedCount: { type: 'number', example: 1 },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, data_management_dto_1.DataManagementDto]),
    __metadata("design:returntype", Promise)
], DataManagementController.prototype, "updateIntegrationScenario", null);
exports.DataManagementController = DataManagementController = __decorate([
    (0, swagger_1.ApiTags)('Data-management'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [data_management_service_1.DataManagementService])
], DataManagementController);
//# sourceMappingURL=data-management.controller.js.map