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
exports.ProcessControlsController = void 0;
const common_1 = require("@nestjs/common");
const process_controls_service_1 = require("./process-controls.service");
const process_controls_dto_1 = require("./dto/process-controls.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../core/decorator/http-response-handler.decorator");
let ProcessControlsController = class ProcessControlsController {
    constructor(processControlsService, processArchiveService) {
        this.processControlsService = processControlsService;
        this.processArchiveService = processArchiveService;
    }
    async create(upsertProcessControlsDto) {
        try {
            const data = await this.processControlsService.upsert(upsertProcessControlsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'process-controls created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the process-controls');
            }
        }
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        try {
            const archiveData = await this.processControlsService.getByProcessById(processId);
            const result = await this.processControlsService.updatequeriesresponseIsDeleted(processId, qrId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'processArchive deleted successfully',
                data: {
                    processId: processId,
                    qrId: qrId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the processArchive');
            }
        }
    }
};
exports.ProcessControlsController = ProcessControlsController;
__decorate([
    (0, common_1.Post)('process-controls'),
    (0, swagger_1.ApiOperation)({ summary: 'Post process control' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                process_controls: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                example: 'Data Quality 1',
                                description: 'Title of the process control',
                            },
                            description: {
                                type: 'string',
                                example: 'Ensure the quality and consistency of incoming data.',
                                description: 'Description of the process control',
                            },
                            activity_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'activity123',
                                },
                                description: 'Array of associated activities',
                            },
                            mdo_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'mdo456',
                                },
                                description: 'Array of associated MDOs (Master Data Objects)',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'process-controls created successfully',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 201 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'process-controls created successfully',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                created: {
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
                                                items: { type: 'string', example: 'activity123' },
                                            },
                                            mdo_id: {
                                                type: 'array',
                                                items: { type: 'string', example: 'mdo456' },
                                            },
                                            _id: { type: 'string', example: 'pc_64gl1z60x' },
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
                    message: 'process-controls created successfully',
                    data: {
                        created: [
                            {
                                title: 'Data Quality 1',
                                description: 'Ensure the quality and consistency of incoming data.',
                                activity_id: ['activity123', 'activity1'],
                                mdo_id: ['mdo456', 'mdo345'],
                                _id: 'pc_64gl1z60x',
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
        description: 'Failed to delete process control',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete process control',
                        },
                    },
                },
            },
        },
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_controls_dto_1.UpsertProcessControlsDto]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/process-controls-delete/:qrId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete process document' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'processControlId',
        required: true,
        description: 'Process control ID',
        example: 'pc_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Process control deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Process control deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                process_control_id: {
                                    type: 'string',
                                    example: 'pc_ruyuwn69e',
                                    description: 'Process control id',
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
        description: 'Failed to delete process control',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete process control',
                        },
                    },
                },
            },
        },
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "updatequeriesresponseIsDeleted", null);
exports.ProcessControlsController = ProcessControlsController = __decorate([
    (0, swagger_1.ApiTags)('Process-controls'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_controls_service_1.ProcessControlsService,
        process_archive_service_1.ProcessArchiveService])
], ProcessControlsController);
//# sourceMappingURL=process-controls.controller.js.map