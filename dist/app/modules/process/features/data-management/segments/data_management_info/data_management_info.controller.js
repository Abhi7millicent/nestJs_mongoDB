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
exports.IntegrationScenarioController = void 0;
const common_1 = require("@nestjs/common");
const data_management_info_service_1 = require("./data_management_info.service");
const data_management_info_dto_1 = require("./dto/data_management_info.dto");
let IntegrationScenarioController = class IntegrationScenarioController {
    constructor(dataManagementService) {
        this.dataManagementService = dataManagementService;
    }
    async updateIntegrationScenario(processId, dataManagementId, dataManagementDto) {
        return this.dataManagementService.update(processId, dataManagementId, dataManagementDto);
    }
};
exports.IntegrationScenarioController = IntegrationScenarioController;
__decorate([
    (0, common_1.Put)(':processId/integration-scenario/:dataManagementId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('dataManagementId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, data_management_info_dto_1.DataManagementDto]),
    __metadata("design:returntype", Promise)
], IntegrationScenarioController.prototype, "updateIntegrationScenario", null);
exports.IntegrationScenarioController = IntegrationScenarioController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [data_management_info_service_1.DataManagementService])
], IntegrationScenarioController);
//# sourceMappingURL=data_management_info.controller.js.map