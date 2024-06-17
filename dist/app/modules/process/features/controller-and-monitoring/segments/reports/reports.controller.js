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
exports.WorkflowsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const reports_dto_1 = require("./dto/reports.dto");
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
let WorkflowsController = class WorkflowsController {
    constructor(reportsService, processArchiveService) {
        this.reportsService = reportsService;
        this.processArchiveService = processArchiveService;
    }
    async addReports(createReportsDto) {
        try {
            const data = await this.reportsService.Upsert(createReportsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'reports created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the reports');
            }
        }
    }
    async updateReportsIsDeleted(processId, reportsId) {
        try {
            const archiveData = await this.reportsService.getByProcessById(processId);
            const result = await this.reportsService.updateReportsIsDeleted(processId, reportsId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'reports deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the reports');
            }
        }
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('reports'),
    (0, swagger_1.ApiOperation)({ summary: 'Post report' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                reports: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                example: 'Report Financial Report',
                                description: 'Title of the report',
                            },
                            description: {
                                type: 'string',
                                example: 'A detailed report of the financial performance for the quarter.',
                                description: 'Description of the report',
                            },
                            attachments: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'financial-summary.pdf',
                                },
                                description: 'Array of attachment filenames',
                            },
                            complexity_level: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'High',
                                },
                                description: 'Array of complexity levels',
                            },
                            calculation_logic: {
                                type: 'string',
                                example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                description: 'Calculation logic used in the report',
                            },
                            type: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'Financial',
                                },
                                description: 'Array of report types',
                            },
                            application: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'Excel',
                                },
                                description: 'Array of applications used',
                            },
                            source_data: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'ERP',
                                },
                                description: 'Array of source data systems',
                            },
                            role: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'Financial Analyst',
                                },
                                description: 'Array of roles associated with the report',
                            },
                            activity_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'activity1',
                                },
                                description: 'Array of associated activity IDs',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'alex.smith',
                                description: 'User who last modified the report',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Reports created successfully',
        schema: {
            type: 'object',
            properties: {
                statusCode: {
                    type: 'number',
                    example: 201,
                },
                success: {
                    type: 'boolean',
                    example: true,
                },
                message: {
                    type: 'string',
                    example: 'reports created successfully',
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
                                        example: 'Report Financial Report',
                                    },
                                    description: {
                                        type: 'string',
                                        example: 'A detailed report of the financial performance for the quarter.',
                                    },
                                    attachments: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'financial-summary.pdf',
                                        },
                                    },
                                    complexity_level: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'High',
                                        },
                                    },
                                    calculation_logic: {
                                        type: 'string',
                                        example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                    },
                                    type: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'Financial',
                                        },
                                    },
                                    application: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'Excel',
                                        },
                                    },
                                    source_data: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'ERP',
                                        },
                                    },
                                    role: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'Financial Analyst',
                                        },
                                    },
                                    activity_id: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'activity1',
                                        },
                                    },
                                    _id: {
                                        type: 'string',
                                        example: 'report_li2jrnnin',
                                    },
                                },
                            },
                        },
                        updated: {
                            type: 'array',
                            items: {
                                type: 'object',
                            },
                            example: [],
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete report',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete report',
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
    __metadata("design:paramtypes", [reports_dto_1.UpsertReportsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addReports", null);
__decorate([
    (0, common_1.Put)(':processId/reports-delete/:reportsId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete report' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'reportId',
        required: true,
        description: 'Report ID',
        example: 'report_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Report deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Report deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                kpis_id: {
                                    type: 'string',
                                    example: 'report_ruyuwn69e',
                                    description: 'Report id',
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
        description: 'Failed to delete report',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete report',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('reportsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateReportsIsDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService,
        process_archive_service_1.ProcessArchiveService])
], WorkflowsController);
//# sourceMappingURL=reports.controller.js.map