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
exports.AutomationScenarioController = void 0;
const common_1 = require("@nestjs/common");
const automation_scenarios_service_1 = require("./automation-scenarios.service");
const automation_scenarios_dto_1 = require("./dto/automation-scenarios.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
const swagger_1 = require("@nestjs/swagger");
let AutomationScenarioController = class AutomationScenarioController {
    constructor(automationScenarioService, processArchiveService) {
        this.automationScenarioService = automationScenarioService;
        this.processArchiveService = processArchiveService;
    }
    async addAutomationScenario(createAutomationScenarioDto) {
        try {
            const data = await this.automationScenarioService.upsertAutomationScenario(createAutomationScenarioDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'AutomationScenario created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the automationScenario');
            }
        }
    }
    async updateAutomationScenarioIsDeleted(processId, automationScenarioId) {
        try {
            const archiveData = await this.automationScenarioService.getByProcessById(processId);
            const result = await this.automationScenarioService.updateAutomationScenarioIsDeleted(processId, automationScenarioId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'AutomationScenario deleted successfully',
                data: {
                    processId: processId,
                    automationScenarioId: automationScenarioId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the automationScenario');
            }
        }
    }
};
exports.AutomationScenarioController = AutomationScenarioController;
__decorate([
    (0, common_1.Post)('automation-scenario'),
    (0, swagger_1.ApiOperation)({ summary: 'Post automation scenario' }),
    (0, swagger_1.ApiBody)({
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
                                example: 'This scenario automates the testing of a new feature.',
                                description: 'This scenario automates the testing of a new feature.',
                            },
                            technology: {
                                type: 'string',
                                example: 'This scenario automates the testing of a new feature.',
                                description: 'This scenario automates the testing of a new feature.',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'This scenario automates the testing of a new feature.',
                                description: 'This scenario automates the testing of a new feature.',
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
                                                example: 'This scenario automates the testing of a new feature.',
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [automation_scenarios_dto_1.UpsertAutomationScenarioDto]),
    __metadata("design:returntype", Promise)
], AutomationScenarioController.prototype, "addAutomationScenario", null);
__decorate([
    (0, common_1.Put)(':processId/automation-scenario-delete/:automationScenarioId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete Automation scenario' }),
    (0, swagger_1.ApiParam)({
        name: 'automationScenarioId',
        type: 'string',
        description: 'Enter automation scenario ID',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        type: 'string',
        description: 'Enter process ID',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('automationScenarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AutomationScenarioController.prototype, "updateAutomationScenarioIsDeleted", null);
exports.AutomationScenarioController = AutomationScenarioController = __decorate([
    (0, swagger_1.ApiTags)('Automation-process'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [automation_scenarios_service_1.AutomationScenarioService,
        process_archive_service_1.ProcessArchiveService])
], AutomationScenarioController);
//# sourceMappingURL=automation-scenarios.controller.js.map