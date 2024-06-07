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
exports.AnalyticalDashboardsController = void 0;
const common_1 = require("@nestjs/common");
const analytical_dashboards_service_1 = require("./analytical-dashboards.service");
const analytical_dashboards_dto_1 = require("./dto/analytical-dashboards.dto");
let AnalyticalDashboardsController = class AnalyticalDashboardsController {
    constructor(analyticalDashboardsService) {
        this.analyticalDashboardsService = analyticalDashboardsService;
    }
    async addAnalyticalDashboards(id, analyticalDashboardsDto) {
        return this.analyticalDashboardsService.addAnalyticalDashboards(id, analyticalDashboardsDto);
    }
    async updateAnalyticalDashboards(processId, analyticalDashboardsId, analyticalDashboardsDto) {
        return this.analyticalDashboardsService.updateAnalyticalDashboards(processId, analyticalDashboardsId, analyticalDashboardsDto);
    }
    async updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId) {
        return this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId);
    }
    async updateAnalyticalDashboardsIsSoftDeleted(processId, analyticalDashboardsId) {
        return this.analyticalDashboardsService.updateAnalyticalDashboardsIsSoftDeleted(processId, analyticalDashboardsId);
    }
};
exports.AnalyticalDashboardsController = AnalyticalDashboardsController;
__decorate([
    (0, common_1.Post)('analytical-Dashboards/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, analytical_dashboards_dto_1.AnalyticalDashboardsDto]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "addAnalyticalDashboards", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-Dashboards/:analyticalDashboardsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboards", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-Dashboards-delete/:analyticalDashboardsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboardsIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-Dashboards-soft-delete/:analyticalDashboardsId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboardsIsSoftDeleted", null);
exports.AnalyticalDashboardsController = AnalyticalDashboardsController = __decorate([
    (0, common_1.Controller)('process-basic-data'),
    __metadata("design:paramtypes", [analytical_dashboards_service_1.AnalyticalDashboardsService])
], AnalyticalDashboardsController);
//# sourceMappingURL=analytical-dashboards.controller.js.map