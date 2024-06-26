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
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../core/decorators/http-response-handler.decorator");
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
                data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to create the process document');
        }
    }
    async updateProcessDocumentIsDeleted(params) {
        try {
            const archiveData = await this.processDocumentService.getByProcessById(params.processId);
            const result = await this.processDocumentService.updateProcessDocumentIsDeleted(params.processId, params.pdId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'processDocument deleted successfully',
                data: {
                    processId: params.processId,
                    pdId: params.pdId,
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
    (0, swagger_1.ApiBody)({ type: process_document_dto_1.ProcessDocumentRequestBodyDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'process-document created successfully',
        type: process_document_dto_1.ProcessDocumentResponseDto,
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
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_document_dto_1.ProcessDocumentRequestBodyDto]),
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
        type: process_document_dto_1.UpdateProcessDocumentResponseBodyDto,
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
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_document_dto_1.UpdateProcessDocumentRequestBodyDto]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocumentIsDeleted", null);
exports.ProcessDocumentController = ProcessDocumentController = __decorate([
    (0, swagger_1.ApiTags)('Process-document'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_document_service_1.ProcessDocumentService,
        process_archive_service_1.ProcessArchiveService])
], ProcessDocumentController);
//# sourceMappingURL=process-document.controller.js.map