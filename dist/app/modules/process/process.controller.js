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
exports.ProcessController = void 0;
const common_1 = require("@nestjs/common");
const process_service_1 = require("./process.service");
const process_archive_service_1 = require("../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../core/decorators/http-response-handler.decorator");
let ProcessController = class ProcessController {
    constructor(processService, processArchiveService) {
        this.processService = processService;
        this.processArchiveService = processArchiveService;
    }
    async getAll() {
        const data = await this.processService.getAllProcess();
        try {
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: 'Processes retrieved successfully',
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
                throw new common_1.InternalServerErrorException('Failed to retrieved the Process');
            }
        }
    }
    async getById(id) {
        try {
            const data = await this.processService.getProcessById(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: 'Process retrieved successfully',
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
                throw new common_1.InternalServerErrorException('Failed to retrieved the Process');
            }
        }
    }
    async delete(id) {
        try {
            const archiveData = await this.processService.getByProcessById(id);
            const result = await this.processService.deleteProcess(id);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: `processId: ${id} deleted successfully`,
                data: { processId: id },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the process');
            }
        }
    }
};
exports.ProcessController = ProcessController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all process' }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get process by id' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '666fbee1fa4e998d0856e133',
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete process by id' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '666fbee1fa4e998d0856e133',
    }),
    (0, swagger_1.ApiResponse)({
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
                            example: 'processId: 666fbee1fa4e998d0856e133 deleted successfully',
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
    }),
    (0, swagger_1.ApiResponse)({
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
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "delete", null);
exports.ProcessController = ProcessController = __decorate([
    (0, swagger_1.ApiTags)('Process'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_service_1.ProcessService,
        process_archive_service_1.ProcessArchiveService])
], ProcessController);
//# sourceMappingURL=process.controller.js.map