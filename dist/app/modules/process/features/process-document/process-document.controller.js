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
exports.ProcessDocumentController = void 0;
const common_1 = require("@nestjs/common");
const process_document_service_1 = require("./process-document.service");
const process_document_dto_1 = require("./dto/process-document.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
const swagger_1 = require("@nestjs/swagger");
let ProcessDocumentController = class ProcessDocumentController {
    constructor(processDocumentService, processArchiveService) {
        this.processDocumentService = processDocumentService;
        this.processArchiveService = processArchiveService;
    }
    async create(createProcessDocumentDto) {
        try {
            const data = await this.processDocumentService.upsert(createProcessDocumentDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'process-document created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the process-document');
            }
        }
    }
    async updateProcessDocumentIsDeleted(processId, pdId) {
        try {
            const archiveData = await this.processDocumentService.getByProcessById(processId);
            const result = await this.processDocumentService.updateProcessDocumentIsDeleted(processId, pdId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'processDocument deleted successfully',
                data: {
                    processId: processId,
                    pdId: pdId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the processDocument');
            }
        }
    }
};
exports.ProcessDocumentController = ProcessDocumentController;
__decorate([
    (0, common_1.Post)('process-document'),
    (0, swagger_1.ApiOperation)({ summary: 'Post process document' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                process_document: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            title: {
                                type: 'string',
                                example: 'Sample Document Title',
                                description: 'Title of the document',
                            },
                            desc: {
                                type: 'string',
                                example: 'This is a sample description of the document.',
                                description: 'Description of the document',
                            },
                            type: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'type1',
                                },
                                description: 'Array of document types',
                            },
                            source: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'source1',
                                },
                                description: 'Array of document sources',
                            },
                            number_range: {
                                type: 'string',
                                example: '100-200',
                                description: 'Range of document numbers',
                            },
                            storage_requirements: {
                                type: 'string',
                                example: 'Store in a cool, dry place',
                                description: 'Storage requirements for the document',
                            },
                            attachments: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'attachment1',
                                },
                                description: 'Array of document attachments',
                            },
                            activity_id: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: 'activity1',
                                },
                                description: 'Array of associated activities',
                            },
                            is_deleted: {
                                type: 'boolean',
                                example: false,
                                description: 'Flag indicating whether the document is deleted or not',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'manthan',
                                description: 'User who last modified the document',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'process-document created successfully',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 201 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'process-document created successfully',
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
                                                example: 'Sample Document Title',
                                            },
                                            desc: {
                                                type: 'string',
                                                example: 'This is a sample description of the document.',
                                            },
                                            type: {
                                                type: 'array',
                                                items: { type: 'string', example: 'type1' },
                                            },
                                            source: {
                                                type: 'array',
                                                items: { type: 'string', example: 'source1' },
                                            },
                                            number_range: {
                                                type: 'string',
                                                example: '100-200',
                                            },
                                            storage_requirements: {
                                                type: 'string',
                                                example: 'Store in a cool, dry place',
                                            },
                                            attachments: {
                                                type: 'array',
                                                items: { type: 'string', example: 'attachment1' },
                                            },
                                            activity_id: {
                                                type: 'array',
                                                items: { type: 'string', example: 'activity1' },
                                            },
                                            is_deleted: { type: 'boolean', example: false },
                                            _id: { type: 'string', example: 'pd_kuclxi9j6' },
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
                    message: 'process-document created successfully',
                    data: {
                        created: [
                            {
                                title: 'Sample Document Title',
                                desc: 'This is a sample description of the document.',
                                type: ['type1', 'type2'],
                                source: ['source1', 'source2'],
                                number_range: '100-200',
                                storage_requirements: 'Store in a cool, dry place',
                                attachments: ['attachment1', 'attachment2'],
                                activity_id: ['activity1', 'activity2'],
                                is_deleted: false,
                                _id: 'pd_kuclxi9j6',
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
        description: 'Failed to delete process document',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete process document',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_document_dto_1.UpsertProcessDocumentDto]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/pd-delete/:pdId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete process document' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'processDocumentId',
        required: true,
        description: 'Process document ID',
        example: 'pd_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Process document deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Process document deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                process_document_id: {
                                    type: 'string',
                                    example: 'pd_ruyuwn69e',
                                    description: 'Process document id',
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
    __param(1, (0, common_1.Param)('pdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocumentIsDeleted", null);
exports.ProcessDocumentController = ProcessDocumentController = __decorate([
    (0, swagger_1.ApiTags)('Process-document'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_document_service_1.ProcessDocumentService,
        process_archive_service_1.ProcessArchiveService])
], ProcessDocumentController);
//# sourceMappingURL=process-document.controller.js.map