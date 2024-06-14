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
                data: result,
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
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_document_dto_1.UpsertProcessDocumentDto]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/pd-delete/:pdId'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('pdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocumentIsDeleted", null);
exports.ProcessDocumentController = ProcessDocumentController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_document_service_1.ProcessDocumentService,
        process_archive_service_1.ProcessArchiveService])
], ProcessDocumentController);
//# sourceMappingURL=process-document.controller.js.map