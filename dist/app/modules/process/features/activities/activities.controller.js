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
exports.ActivitiesController = void 0;
const common_1 = require("@nestjs/common");
const activities_service_1 = require("./activities.service");
const activities_dto_1 = require("./dto/activities.dto");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
let ActivitiesController = class ActivitiesController {
    constructor(activitiesService, processArchiveService) {
        this.activitiesService = activitiesService;
        this.processArchiveService = processArchiveService;
    }
    async addActivity(createActivityDto) {
        try {
            const data = await this.activitiesService.Upsert(createActivityDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'Activity created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the activity');
            }
        }
    }
    async updateActivityIsDeleted(processId, activityId) {
        try {
            const archiveData = await this.activitiesService.getByProcessById(processId);
            const result = await this.activitiesService.updateActivityIsDeleted(processId, activityId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Activity deleted successfully',
                data: {
                    processId: processId,
                    activityId: activityId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the activity');
            }
        }
    }
};
exports.ActivitiesController = ActivitiesController;
__decorate([
    (0, common_1.Post)('/activities'),
    (0, swagger_1.ApiOperation)({ summary: 'Post activity' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '6667e1246e91ff27e948a0e9',
                    description: 'Identifier for the activity',
                },
                activity: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            sr_no: {
                                type: 'string',
                                example: '002',
                                description: 'Serial number for the activity',
                            },
                            description: {
                                type: 'string',
                                example: 'Initial activity description',
                                description: 'Description of the activity',
                            },
                            performed_at: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    format: 'date-time',
                                    example: '2024-06-01T12:00:00Z',
                                },
                                description: 'Array of timestamps when the activity was performed',
                            },
                            performed_by: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'user1',
                                },
                                description: 'Array of users who performed the activity',
                            },
                            performed_where: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'location1',
                                },
                                description: 'Array of locations where the activity was performed',
                            },
                            value_calculation_logic: {
                                type: 'string',
                                example: 'logic1',
                                description: 'Logic used for value calculation',
                            },
                            accounts_postings: {
                                type: 'string',
                                example: 'accounting details 1',
                                description: 'Details of accounting postings',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'admin1',
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
        description: 'Activity created successfully',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 201 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Activity created successfully',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                created: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            sr_no: { type: 'string', example: '002' },
                                            description: {
                                                type: 'string',
                                                example: 'Initial activity description',
                                            },
                                            performed_at: {
                                                type: 'array',
                                                items: {
                                                    type: 'string',
                                                    format: 'date-time',
                                                    example: '2024-06-01T12:00:00Z',
                                                },
                                            },
                                            performed_by: {
                                                type: 'array',
                                                items: { type: 'string', example: 'user1' },
                                            },
                                            performed_where: {
                                                type: 'array',
                                                items: { type: 'string', example: 'location1' },
                                            },
                                            value_calculation_logic: {
                                                type: 'string',
                                                example: 'logic1',
                                            },
                                            accounts_postings: {
                                                type: 'string',
                                                example: 'accounting details 1',
                                            },
                                            is_deleted: { type: 'boolean', example: false },
                                            _id: { type: 'string', example: 'activity_0zy3wf788' },
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
                    message: 'Activity created successfully',
                    data: {
                        created: [
                            {
                                sr_no: '002',
                                description: 'Initial activity description',
                                performed_at: ['2024-06-01T12:00:00Z', '2024-06-02T12:00:00Z'],
                                performed_by: ['user1', 'user2'],
                                performed_where: ['location1', 'location2'],
                                value_calculation_logic: 'logic1',
                                accounts_postings: 'accounting details 1',
                                is_deleted: false,
                                _id: 'activity_0zy3wf788',
                            },
                            {
                                sr_no: '002',
                                description: 'Second activity description',
                                performed_at: ['2024-06-03T14:00:00Z'],
                                performed_by: ['user3'],
                                performed_where: ['location3'],
                                value_calculation_logic: 'logic2',
                                accounts_postings: 'accounting details 2',
                                is_deleted: false,
                                _id: 'activity_4tzm6nz0c',
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
        description: 'Failed to create the activity',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        message: {
                            type: 'string',
                            example: 'Failed to create the activity',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activities_dto_1.UpsertActivityDto]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "addActivity", null);
__decorate([
    (0, common_1.Put)(':processId/activities-delete/:activityId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete activity' }),
    (0, swagger_1.ApiParam)({
        name: 'activityId',
        type: 'string',
        description: 'Enter activity ID',
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
        description: 'Activity deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Activity deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                activity_id: {
                                    type: 'string',
                                    example: 'activity_h8poikl68',
                                    description: 'Activity id',
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
        description: 'Failed to delete the activity',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete the activity',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('activityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "updateActivityIsDeleted", null);
exports.ActivitiesController = ActivitiesController = __decorate([
    (0, swagger_1.ApiTags)('Activities'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [activities_service_1.ActivitiesService,
        process_archive_service_1.ProcessArchiveService])
], ActivitiesController);
//# sourceMappingURL=activities.controller.js.map