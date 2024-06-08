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
let QueriesResponsesController = class QueriesResponsesController {
    constructor(queriesResponsesService) {
        this.queriesResponsesService = queriesResponsesService;
    }
    create(id, queriesResponseDto) {
        return this.queriesResponsesService.create(id, queriesResponseDto);
    }
    findAll() {
        return this.queriesResponsesService.findAll();
    }
    findOne(id) {
        return this.queriesResponsesService.findOne(+id);
    }
    async updateQueriesResponse(processId, qrId, workflowData) {
        return this.queriesResponsesService.update(processId, qrId, workflowData);
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        return this.queriesResponsesService.updatequeriesresponseIsDeleted(processId, qrId);
    }
    async updateQueriesResponsesIsSoftDeleted(processId, qrId) {
        return this.queriesResponsesService.updateQueriesResponsesIsSoftDeleted(processId, qrId);
    }
    remove(id) {
        return this.queriesResponsesService.remove(+id);
    }
};
exports.QueriesResponsesController = QueriesResponsesController;
__decorate([
    (0, common_1.Post)('queries-responses/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, queries_response_dto_1.QueriesResponseDto]),
    __metadata("design:returntype", void 0)
], QueriesResponsesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QueriesResponsesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QueriesResponsesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':processId/queriesresponse/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "updateQueriesResponse", null);
__decorate([
    (0, common_1.Put)(':processId/qr-delete/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "updatequeriesresponseIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/qr-soft-delete/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "updateQueriesResponsesIsSoftDeleted", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QueriesResponsesController.prototype, "remove", null);
exports.QueriesResponsesController = QueriesResponsesController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [queries_responses_service_1.QueriesResponsesService])
], QueriesResponsesController);
//# sourceMappingURL=queries-responses.controller.js.map