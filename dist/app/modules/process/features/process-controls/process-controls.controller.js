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
let ProcessControlsController = class ProcessControlsController {
    constructor(processControlsService) {
        this.processControlsService = processControlsService;
    }
    create(upsertProcessControlsDto) {
        return this.processControlsService.upsert(upsertProcessControlsDto);
    }
    findAll() {
        return this.processControlsService.findAll();
    }
    findOne(id) {
        return this.processControlsService.findOne(+id);
    }
    async updateQueriesResponse(processId, qrId, workflowData) {
        return this.processControlsService.update(processId, qrId, workflowData);
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        return this.processControlsService.updatequeriesresponseIsDeleted(processId, qrId);
    }
    async updateQueriesResponsesIsSoftDeleted(processId, qrId) {
        return this.processControlsService.updateQueriesResponsesIsSoftDeleted(processId, qrId);
    }
    remove(id) {
        return this.processControlsService.remove(+id);
    }
};
exports.ProcessControlsController = ProcessControlsController;
__decorate([
    (0, common_1.Post)('process-controls'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_controls_dto_1.UpsertProcessControlsDto]),
    __metadata("design:returntype", void 0)
], ProcessControlsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProcessControlsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcessControlsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':processId/process-controls-delete/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "updateQueriesResponse", null);
__decorate([
    (0, common_1.Put)(':processId/process-controls/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "updatequeriesresponseIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/process-controls/:qrId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "updateQueriesResponsesIsSoftDeleted", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProcessControlsController.prototype, "remove", null);
exports.ProcessControlsController = ProcessControlsController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_controls_service_1.ProcessControlsService])
], ProcessControlsController);
//# sourceMappingURL=process-controls.controller.js.map