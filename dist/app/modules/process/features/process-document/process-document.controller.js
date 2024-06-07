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
let ProcessDocumentController = class ProcessDocumentController {
    constructor(processDocumentService) {
        this.processDocumentService = processDocumentService;
    }
    create(id, createProcessDocumentDto) {
        return this.processDocumentService.create(id, createProcessDocumentDto);
    }
    findAll() {
        return this.processDocumentService.findAll();
    }
    findOne(id) {
        return this.processDocumentService.findOne(+id);
    }
    async updateProcessDocument(processId, pdId, processDocumentData) {
        return this.processDocumentService.updateProcessDocument(processId, pdId, processDocumentData);
    }
    async updateProcessDocumentIsDeleted(processId, pdId) {
        return this.processDocumentService.updateProcessDocumentIsDeleted(processId, pdId);
    }
    async updateProcessDocumentsIsSoftDeleted(processId, pdId) {
        return this.processDocumentService.updateProcessDocumentsIsSoftDeleted(processId, pdId);
    }
    remove(id) {
        return this.processDocumentService.remove(+id);
    }
};
exports.ProcessDocumentController = ProcessDocumentController;
__decorate([
    (0, common_1.Post)('process-document/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, process_document_dto_1.ProcessDocumentDto]),
    __metadata("design:returntype", void 0)
], ProcessDocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProcessDocumentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcessDocumentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':processId/processdocument/:pdId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('pdId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocument", null);
__decorate([
    (0, common_1.Put)(':processId/pd-delete/:pdId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('pdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocumentIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/pd-soft-delete/:pdId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('pdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessDocumentController.prototype, "updateProcessDocumentsIsSoftDeleted", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcessDocumentController.prototype, "remove", null);
exports.ProcessDocumentController = ProcessDocumentController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [process_document_service_1.ProcessDocumentService])
], ProcessDocumentController);
//# sourceMappingURL=process-document.controller.js.map