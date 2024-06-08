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
exports.ComplianceScenariosDataController = void 0;
const common_1 = require("@nestjs/common");
const compliance_scenarios_data_service_1 = require("./compliance-scenarios-data.service");
const compliance_scenarios_data_dto_1 = require("./dto/compliance-scenarios-data.dto");
let ComplianceScenariosDataController = class ComplianceScenariosDataController {
    constructor(complianceScenariosDataService) {
        this.complianceScenariosDataService = complianceScenariosDataService;
    }
    async addComplianceScenariosData(id, complianceScenarioDataDto) {
        return this.complianceScenariosDataService.addComplianceScenariosData(id, complianceScenarioDataDto);
    }
    async updateComplianceScenariosData(processId, complianceScenarioDataId, complianceScenarioDataDto) {
        return this.complianceScenariosDataService.updateComplianceScenariosData(processId, complianceScenarioDataId, complianceScenarioDataDto);
    }
    async updateComplianceScenariosDataIsDeleted(processId, complianceScenarioDataId) {
        return this.complianceScenariosDataService.updateComplianceScenariosDataIsDeleted(processId, complianceScenarioDataId);
    }
    async updateComplianceScenariosDataIsSoftDeleted(processId, complianceScenarioDataId) {
        return this.complianceScenariosDataService.updateComplianceScenariosDataIsSoftDeleted(processId, complianceScenarioDataId);
    }
};
exports.ComplianceScenariosDataController = ComplianceScenariosDataController;
__decorate([
    (0, common_1.Post)('compliance-scenario-data/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, compliance_scenarios_data_dto_1.ComplianceScenarioDataDto]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "addComplianceScenariosData", null);
__decorate([
    (0, common_1.Put)(':processId/compliance-scenario-data/:complianceScenarioDataId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('complianceScenarioDataId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "updateComplianceScenariosData", null);
__decorate([
    (0, common_1.Put)(':processId/compliance-scenario-data-delete/:complianceScenarioDataId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('complianceScenarioDataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "updateComplianceScenariosDataIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/compliance-scenario-data-soft-delete/:complianceScenarioDataId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('complianceScenarioDataId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ComplianceScenariosDataController.prototype, "updateComplianceScenariosDataIsSoftDeleted", null);
exports.ComplianceScenariosDataController = ComplianceScenariosDataController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [compliance_scenarios_data_service_1.ComplianceScenariosDataService])
], ComplianceScenariosDataController);
//# sourceMappingURL=compliance-scenarios-data.controller.js.map