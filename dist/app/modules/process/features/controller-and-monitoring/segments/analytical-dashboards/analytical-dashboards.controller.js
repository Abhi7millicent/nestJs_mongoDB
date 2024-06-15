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
exports.AnalyticalDashboardsController = void 0;
const common_1 = require("@nestjs/common");
const analytical_dashboards_service_1 = require("./analytical-dashboards.service");
const analytical_dashboards_dto_1 = require("./dto/analytical-dashboards.dto");
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
let AnalyticalDashboardsController = class AnalyticalDashboardsController {
    constructor(analyticalDashboardsService, processArchiveService) {
        this.analyticalDashboardsService = analyticalDashboardsService;
        this.processArchiveService = processArchiveService;
    }
    async upsertAnalyticalDashboards(createAnalyticalDashboardsDto) {
        try {
            const data = await this.analyticalDashboardsService.Upsert(createAnalyticalDashboardsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'AnalyticalDashboards created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the AnalyticalDashboards');
            }
        }
    }
    async updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId) {
        try {
            const archiveData = await this.analyticalDashboardsService.getByProcessById(processId);
            const result = await this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'analyticalDashboards deleted successfully',
                data: {
                    processId: processId,
                    analyticalDashboardsId: analyticalDashboardsId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the analyticalDashboards');
            }
        }
    }
};
exports.AnalyticalDashboardsController = AnalyticalDashboardsController;
__decorate([
    (0, common_1.Post)('analytical-dashboards'),
    (0, swagger_1.ApiOperation)({ summary: 'Post Analytical dashboard' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                analytical_dashboards: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                example: 'analytical Dashboard',
                                description: 'Title of the analytical dashboard',
                            },
                            description: {
                                type: 'string',
                                example: 'A comprehensive dashboard for sales analytics.',
                                description: 'Description of the analytical dashboard',
                            },
                            calculation_logic: {
                                type: 'string',
                                example: 'Current month sales - Previous month sales / Previous month sales * 100',
                                description: 'Logic used for calculations in the dashboard',
                            },
                            attachments: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'report.pdf',
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
                            type: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'Analytical',
                                },
                                description: 'Array of dashboard types',
                            },
                            dashboard_application: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'PowerBI',
                                },
                                description: 'Array of dashboard applications',
                            },
                            source_data: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'CRM',
                                },
                                description: 'Array of data sources',
                            },
                            role: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'Analyst',
                                },
                                description: 'Array of roles',
                            },
                            application: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'test',
                                },
                                description: 'Array of applications',
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
                                example: 'john.doe',
                                description: 'User who last modified the analytical dashboard',
                            },
                            is_deleted: {
                                type: 'boolean',
                                example: false,
                                description: 'Flag indicating whether the analytical dashboard is deleted or not',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'AnalyticalDashboards created successfully',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 201 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'AnalyticalDashboards created successfully',
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
                                                items: { type: 'string', example: 'report.pdf' },
                                            },
                                            complexity_level: {
                                                type: 'array',
                                                items: { type: 'string', example: 'High' },
                                            },
                                            type: {
                                                type: 'array',
                                                items: { type: 'string', example: 'Analytical' },
                                            },
                                            dashboard_application: {
                                                type: 'array',
                                                items: { type: 'string', example: 'PowerBI' },
                                            },
                                            source_data: {
                                                type: 'array',
                                                items: { type: 'string', example: 'CRM' },
                                            },
                                            role: {
                                                type: 'array',
                                                items: { type: 'string', example: 'Analyst' },
                                            },
                                            application: {
                                                type: 'array',
                                                items: { type: 'string', example: 'test' },
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string', example: 'activity1' },
                                            },
                                            is_deleted: { type: 'boolean', example: false },
                                            _id: { type: 'string', example: 'ad_r5vnypwae' },
                                        },
                                    },
                                },
                                updated: { type: 'array', items: { type: 'object' } },
                            },
                        },
                    },
                },
                example: {
                    statusCode: 201,
                    success: true,
                    message: 'AnalyticalDashboards created successfully',
                    data: {
                        created: [
                            {
                                title: 'analytical Dashboard',
                                description: 'A comprehensive dashboard for sales analytics.',
                                calculation_logic: 'Current month sales - Previous month sales / Previous month sales * 100',
                                attachments: ['report.pdf', 'chart.png'],
                                complexity_level: ['High'],
                                type: ['Analytical', 'Strategic'],
                                dashboard_application: ['PowerBI', 'Tableau'],
                                source_data: ['CRM', 'ERP'],
                                role: ['Analyst', 'Manager'],
                                application: ['test', 'test2'],
                                activity_id: ['activity1', 'activity2'],
                                is_deleted: false,
                                _id: 'ad_r5vnypwae',
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
        description: 'Failed to delete analytical dashboard',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete analytical dashboard',
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
    __metadata("design:paramtypes", [analytical_dashboards_dto_1.UpsertAnalyticalDashboardsDto]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "upsertAnalyticalDashboards", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-dashboards-delete/:analyticalDashboardsId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete analytical dashboard' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'analyticalDashboardId',
        required: true,
        description: 'Analytical dashboard ID',
        example: 'ad_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Analytical dashboard deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Analytical dashboard deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                analytical_dashboard_id: {
                                    type: 'string',
                                    example: 'ad_ruyuwn69e',
                                    description: 'Analytical dashboard id',
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
        description: 'Failed to delete analytical dashboard',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete analytical dashboard',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboardsIsDeleted", null);
exports.AnalyticalDashboardsController = AnalyticalDashboardsController = __decorate([
    (0, swagger_1.ApiTags)('Analytical-dashboard'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [analytical_dashboards_service_1.AnalyticalDashboardsService,
        process_archive_service_1.ProcessArchiveService])
], AnalyticalDashboardsController);
//# sourceMappingURL=analytical-dashboards.controller.js.map