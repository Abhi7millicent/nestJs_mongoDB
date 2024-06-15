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
exports.QueriesResponsesController = void 0;
const common_1 = require("@nestjs/common");
const queries_responses_service_1 = require("./queries-responses.service");
const queries_response_dto_1 = require("./dto/queries-response.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
const swagger_1 = require("@nestjs/swagger");
let QueriesResponsesController = class QueriesResponsesController {
    constructor(queriesResponsesService, processArchiveService) {
        this.queriesResponsesService = queriesResponsesService;
        this.processArchiveService = processArchiveService;
    }
    async create(createQueriesResponseDto) {
        try {
            const data = await this.queriesResponsesService.Upsert(createQueriesResponseDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'queries-responses created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the queries-responses');
            }
        }
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        try {
            const archiveData = await this.queriesResponsesService.getByProcessById(processId);
            const result = await this.queriesResponsesService.updatequeriesresponseIsDeleted(processId, qrId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'queriesResponses deleted successfully',
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
                throw new common_1.InternalServerErrorException('Failed to delete the queriesResponses');
            }
        }
    }
};
exports.QueriesResponsesController = QueriesResponsesController;
__decorate([
    (0, common_1.Post)('queries-responses'),
    (0, swagger_1.ApiOperation)({ summary: 'Post queries and response' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    example: '666d417093b9df8f829b22a3',
                    description: 'Identifier for the activity',
                },
                queries_response: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            query: {
                                type: 'string',
                                example: 'What is NestJS?',
                                description: 'The query text',
                            },
                            response: {
                                type: 'string',
                                example: 'NestJS is a progressive Node.js framework.',
                                description: 'The response to the query',
                            },
                            last_modified_by: {
                                type: 'string',
                                example: 'manthan',
                                description: 'User who last modified the query response',
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'queries-responses created successfully',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 201 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'queries-responses created successfully',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                created: {
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
                                updated: { type: 'array', items: { type: 'object' } },
                            },
                        },
                    },
                },
                example: {
                    statusCode: 201,
                    success: true,
                    message: 'queries-responses created successfully',
                    data: {
                        created: [
                            {
                                query: 'What is NestJS?',
                                response: 'NestJS is a progressive Node.js framework.',
                                _id: 'qr_eas75e3zu',
                            },
                            {
                                query: 'What is NestJS1?',
                                response: 'NestJS is a progressive Node.js framework1.',
                                _id: 'qr_6l787j054',
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
        description: 'Failed to delete queries and response',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete queries and response',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queries_response_dto_1.UpsertQueriesResponseDto]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/qr-delete/:qrId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete queries and response' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'quriesResponseId',
        required: true,
        description: 'Queries and response ID',
        example: 'qr_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Queries and response deleted',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 200 },
                        success: { type: 'boolean', example: true },
                        message: {
                            type: 'string',
                            example: 'Queries and response deleted',
                        },
                        data: {
                            type: 'object',
                            properties: {
                                _id: {
                                    type: 'string',
                                    example: '6667e1246e91ff27e948a0e9',
                                    description: 'Process id',
                                },
                                queries_response_id: {
                                    type: 'string',
                                    example: 'qr_ruyuwn69e',
                                    description: 'Queries and response id',
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
        description: 'Failed to delete queries and response',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete queries and response',
                        },
                    },
                },
            },
        },
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "updatequeriesresponseIsDeleted", null);
exports.QueriesResponsesController = QueriesResponsesController = __decorate([
    (0, swagger_1.ApiTags)('Queries-responses'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [queries_responses_service_1.QueriesResponsesService,
        process_archive_service_1.ProcessArchiveService])
], QueriesResponsesController);
//# sourceMappingURL=queries-responses.controller.js.map