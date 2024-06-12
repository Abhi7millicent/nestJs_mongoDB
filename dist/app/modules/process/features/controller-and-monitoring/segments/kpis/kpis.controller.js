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
exports.KPIsController = void 0;
const common_1 = require("@nestjs/common");
const kpis_service_1 = require("./kpis.service");
const kpis_dto_1 = require("./dto/kpis.dto");
let KPIsController = class KPIsController {
    constructor(kpisService) {
        this.kpisService = kpisService;
    }
    async addKPIs(createkpisDto) {
        return this.kpisService.Upsert(createkpisDto);
    }
    async updateKPIs(processId, kpisId, kpisDto) {
        return this.kpisService.updateKPIs(processId, kpisId, kpisDto);
    }
    async updateKPIsIsDeleted(processId, kpisId) {
        return this.kpisService.updateKPIsIsDeleted(processId, kpisId);
    }
    async updateKPIsIsSoftDeleted(processId, kpisId) {
        return this.kpisService.updateKPIsIsSoftDeleted(processId, kpisId);
    }
};
exports.KPIsController = KPIsController;
__decorate([
    (0, common_1.Post)('kpis'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kpis_dto_1.UpsertKPIsDto]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "addKPIs", null);
__decorate([
    (0, common_1.Put)(':processId/kpis/:kpisId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('kpisId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "updateKPIs", null);
__decorate([
    (0, common_1.Put)(':processId/kpis-delete/:kpisId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('kpisId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "updateKPIsIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/kpis-soft-delete/:kpisId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('kpisId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "updateKPIsIsSoftDeleted", null);
exports.KPIsController = KPIsController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [kpis_service_1.KPIsService])
], KPIsController);
//# sourceMappingURL=kpis.controller.js.map