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
exports.AuditTrailScenariosController = void 0;
const common_1 = require("@nestjs/common");
const audit_trail_service_1 = require("./audit-trail.service");
const audit_trail_dto_1 = require("./dto/audit-trail.dto");
let AuditTrailScenariosController = class AuditTrailScenariosController {
    constructor(auditTrailScenariosService) {
        this.auditTrailScenariosService = auditTrailScenariosService;
    }
    async upsertAuditTrailScenarios(createAuditTrailScenariosDto) {
        return this.auditTrailScenariosService.upsertAuditTrailScenarios(createAuditTrailScenariosDto);
    }
    async updateWorkflow(processId, auditTrailScenariosId, auditTrailScenariosDto) {
        return this.auditTrailScenariosService.updateAuditTrailScenarios(processId, auditTrailScenariosId, auditTrailScenariosDto);
    }
    async updateWorkflowsIsDeleted(processId, auditTrailScenariosId) {
        return this.auditTrailScenariosService.updateAuditTrailScenariosIsDeleted(processId, auditTrailScenariosId);
    }
    async updateWorkflowsIsSoftDeleted(processId, auditTrailScenariosId) {
        return this.auditTrailScenariosService.updateAuditTrailScenariosIsSoftDeleted(processId, auditTrailScenariosId);
    }
};
exports.AuditTrailScenariosController = AuditTrailScenariosController;
__decorate([
    (0, common_1.Post)('audit-trail-scenarios'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [audit_trail_dto_1.UpsertAuditTrailScenariosDto]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "upsertAuditTrailScenarios", null);
__decorate([
    (0, common_1.Put)(':processId/audit-trail-scenarios/:auditTrailScenariosId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('auditTrailScenariosId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "updateWorkflow", null);
__decorate([
    (0, common_1.Put)(':processId/audit-trail-scenarios-delete/:auditTrailScenariosId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('auditTrailScenariosId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "updateWorkflowsIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/audit-trail-scenarios-soft-delete/:auditTrailScenariosId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('auditTrailScenariosId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "updateWorkflowsIsSoftDeleted", null);
exports.AuditTrailScenariosController = AuditTrailScenariosController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [audit_trail_service_1.AuditTrailScenariosService])
], AuditTrailScenariosController);
//# sourceMappingURL=audit-trail.controller.js.map