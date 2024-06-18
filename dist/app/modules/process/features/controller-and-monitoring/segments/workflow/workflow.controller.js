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
const workflow_service_1 = require("./workflow.service");
const workflows_dto_1 = require("./dto/workflows.dto");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../../../core/decorator/http-response-handler.decorator");
let WorkflowsController = class WorkflowsController {
    constructor(workflowsService, processArchiveService) {
        this.workflowsService = workflowsService;
        this.processArchiveService = processArchiveService;
    }
    async addWorkflows(createWorkflowsDto) {
        try {
            const data = await this.workflowsService.upsert(createWorkflowsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'work-flows created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the work-flows');
            }
        }
    }
    async updateWorkflowsIsDeleted(processId, workflowId) {
        try {
            const archiveData = await this.workflowsService.getByProcessById(processId);
            const result = await this.workflowsService.updateWorkflowsIsDeleted(processId, workflowId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'workflows deleted successfully',
                data: {
                    processId: processId,
                    workflowId: workflowId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the workflows');
            }
        }
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('work-flows'),
    (0, swagger_1.ApiOperation)({ summary: 'Post activity' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '6667edbe6792baa96f738e2e',
                    description: 'Identifier for the activity',
                },
                workflows: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                example: 'Automated Data Processing2',
                                description: 'Title of the workflow',
                            },
                            description: {
                                type: 'string',
                                example: 'Workflow for automating data processing tasks using Python and SQL.',
                                description: 'Detailed description of the workflow',
                            },
                            technology: {
                                type: 'string',
                                example: 'Python, SQL',
                                description: 'Technologies used in the workflow',
                            },
                            levels: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'beginner',
                                },
                                description: 'Levels of the workflow',
                            },
                            roles: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'data_engineer',
                                },
                                description: 'Roles associated with the workflow',
                            },
                            activity_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'act123',
                                },
                                description: 'Array of associated activities',
                            },
                            automation_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'auto123',
                                },
                                description: 'Array of associated automation ids',
                            },
                            integration_scenario_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'int123',
                                },
                                description: 'Array of associated integration scenario ids',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'user123',
                                description: 'User who last modified the workflow',
                            },
                            is_deleted: {
                                type: 'boolean',
                                example: false,
                                description: 'Flag indicating whether the workflow is deleted',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Work-flows created successfully',
        schema: {
            type: 'object',
            properties: {
                statusCode: {
                    type: 'number',
                    example: 201,
                    description: 'HTTP status code',
                },
                success: {
                    type: 'boolean',
                    example: true,
                    description: 'Indicates whether the request was successful',
                },
                message: {
                    type: 'string',
                    example: 'work-flows created successfully',
                    description: 'Response message',
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
                                        example: 'Automated Data Processing2',
                                        description: 'Title of the workflow',
                                    },
                                    description: {
                                        type: 'string',
                                        example: 'Workflow for automating data processing tasks using Python and SQL.',
                                        description: 'Detailed description of the workflow',
                                    },
                                    technology: {
                                        type: 'string',
                                        example: 'Python, SQL',
                                        description: 'Technologies used in the workflow',
                                    },
                                    levels: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'beginner',
                                        },
                                        description: 'Levels of the workflow',
                                    },
                                    roles: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'data_engineer',
                                        },
                                        description: 'Roles associated with the workflow',
                                    },
                                    activity_id: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'act123',
                                        },
                                        description: 'Array of associated activities',
                                    },
                                    automation_id: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'auto123',
                                        },
                                        description: 'Array of associated automation ids',
                                    },
                                    integration_scenario_id: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            example: 'int123',
                                        },
                                        description: 'Array of associated integration scenario ids',
                                    },
                                    is_deleted: {
                                        type: 'boolean',
                                        example: false,
                                        description: 'Flag indicating whether the workflow is deleted',
                                    },
                                    _id: {
                                        type: 'string',
                                        example: 'wf_lizns5vun',
                                        description: 'Unique identifier for the workflow',
                                    },
                                },
                            },
                            description: 'List of created workflows',
                        },
                        updated: {
                            type: 'array',
                            items: {
                                type: 'object',
                            },
                            description: 'List of updated workflows',
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to create workflow',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        message: {
                            type: 'string',
                            example: 'Failed to create workflow',
                        },
                    },
                },
            },
        },
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workflows_dto_1.UpsertWorkflowsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addWorkflows", null);
__decorate([
    (0, common_1.Put)(':processId/workflows-delete/:workflowId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete workflow' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'workflowId',
        required: true,
        description: 'Workflow ID',
        example: 'wf_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Workflow deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Workflow deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                workflow_id: {
                                    type: 'string',
                                    example: 'wf_ruyuwn69e',
                                    description: 'Workflow id',
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
        description: 'Failed to delete workflow',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete workflow',
                        },
                    },
                },
            },
        },
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('workflowId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateWorkflowsIsDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, swagger_1.ApiTags)('Workflow'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [workflow_service_1.WorkflowsService,
        process_archive_service_1.ProcessArchiveService])
], WorkflowsController);
//# sourceMappingURL=workflow.controller.js.map