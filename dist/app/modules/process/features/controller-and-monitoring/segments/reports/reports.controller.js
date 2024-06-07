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
const reports_service_1 = require("./reports.service");
const reports_dto_1 = require("./dto/reports.dto");
let WorkflowsController = class WorkflowsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    async addReports(id, reportsDto) {
        return this.reportsService.addReports(id, reportsDto);
    }
    async updateReports(processId, reportsId, reportsDto) {
        return this.reportsService.updateReports(processId, reportsId, reportsDto);
    }
    async updateReportsIsDeleted(processId, reportsId) {
        return this.reportsService.updateReportsIsDeleted(processId, reportsId);
    }
    async updateReportsIsSoftDeleted(processId, reportsId) {
        return this.reportsService.updateReportsIsSoftDeleted(processId, reportsId);
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('reports/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, reports_dto_1.ReportsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addReports", null);
__decorate([
    (0, common_1.Put)(':processId/reports/:reportsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('reportsId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateReports", null);
__decorate([
    (0, common_1.Put)(':processId/reports-delete/:reportsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('reportsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateReportsIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/reports-soft-delete/:reportsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('reportsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateReportsIsSoftDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], WorkflowsController);
//# sourceMappingURL=reports.controller.js.map