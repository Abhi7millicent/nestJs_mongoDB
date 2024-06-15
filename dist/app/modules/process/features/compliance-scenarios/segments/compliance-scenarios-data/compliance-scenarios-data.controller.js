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
exports.ComplianceScenariosDataController = void 0;
const common_1 = require("@nestjs/common");
const compliance_scenarios_data_service_1 = require("./compliance-scenarios-data.service");
const compliance_scenarios_data_dto_1 = require("./dto/compliance-scenarios-data.dto");
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
let ComplianceScenariosDataController = class ComplianceScenariosDataController {
    constructor(complianceScenariosDataService, processArchiveService) {
        this.complianceScenariosDataService = complianceScenariosDataService;
        this.processArchiveService = processArchiveService;
    }
    async addComplianceScenariosData(createComplianceScenarioDataDto) {
        try {
            const data = await this.complianceScenariosDataService.upsertComplianceScenariosData(createComplianceScenarioDataDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'ComplianceScenario created successfully',
                data: data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof common_1.BadRequestException) {
                throw new common_1.BadRequestException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to create the ComplianceScenario');
            }
        }
    }
    async updateComplianceScenariosDataIsDeleted(processId, complianceScenarioDataId) {
        try {
            const archiveData = await this.complianceScenariosDataService.getByProcessById(processId);
            const result = await this.complianceScenariosDataService.updateComplianceScenariosDataIsDeleted(processId, complianceScenarioDataId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'ComplianceScenarios deleted successfully',
                data: {
                    processId: processId,
                    complianceScenarioDataId: complianceScenarioDataId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the ComplianceScenarios');
            }
        }
    }
};
exports.ComplianceScenariosDataController = ComplianceScenariosDataController;
__decorate([
    (0, common_1.Post)('compliance-scenario-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Post Compliance scenario data' }),
    (0, swagger_1.ApiBody)({
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
                                example: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
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
                                description: 'Flag indicating whether the activity is deleted or not',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
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
                                                example: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
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
                                description: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [compliance_scenarios_data_dto_1.UpsertComplianceScenarioDataDto]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "addComplianceScenariosData", null);
__decorate([
    (0, common_1.Put)(':processId/compliance-scenario-data-delete/:complianceScenarioDataId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete Compliance scenario' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'complainceScenarioId',
        required: true,
        description: 'Compliance Scenarios ID',
        example: 'cs_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('complianceScenarioDataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "updateComplianceScenariosDataIsDeleted", null);
exports.ComplianceScenariosDataController = ComplianceScenariosDataController = __decorate([
    (0, swagger_1.ApiTags)('Compliance-scenario'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [compliance_scenarios_data_service_1.ComplianceScenariosDataService,
        process_archive_service_1.ProcessArchiveService])
], ComplianceScenariosDataController);
//# sourceMappingURL=compliance-scenarios-data.controller.js.map