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
exports.AutomationScenarioController = void 0;
const common_1 = require("@nestjs/common");
const automation_scenarios_service_1 = require("./automation-scenarios.service");
const automation_scenarios_dto_1 = require("./dto/automation-scenarios.dto");
let AutomationScenarioController = class AutomationScenarioController {
    constructor(automationScenarioService) {
        this.automationScenarioService = automationScenarioService;
    }
    async addAutomationScenario(createAutomationScenarioDto) {
        try {
            const data = await this.automationScenarioService.upsertAutomationScenario(createAutomationScenarioDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'AutomationScenario created successfully',
                data: data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Internal server error',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async updateAutomationScenarioIsDeleted(processId, automationScenarioId) {
        return this.automationScenarioService.updateAutomationScenarioIsDeleted(processId, automationScenarioId);
    }
    async updateAutomationScenarioIsSoftDeleted(processId, automationScenarioId) {
        return this.automationScenarioService.updateAutomationScenarioIsSoftDeleted(processId, automationScenarioId);
    }
};
exports.AutomationScenarioController = AutomationScenarioController;
__decorate([
    (0, common_1.Post)('automation-scenario'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [automation_scenarios_dto_1.UpsertAutomationScenarioDto]),
    __metadata("design:returntype", Promise)
], AutomationScenarioController.prototype, "addAutomationScenario", null);
__decorate([
    (0, common_1.Put)(':processId/automation-scenario/:automationScenarioId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('automationScenarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AutomationScenarioController.prototype, "updateAutomationScenarioIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/automation-scenario/:automationScenarioId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('automationScenarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AutomationScenarioController.prototype, "updateAutomationScenarioIsSoftDeleted", null);
exports.AutomationScenarioController = AutomationScenarioController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [automation_scenarios_service_1.AutomationScenarioService])
], AutomationScenarioController);
//# sourceMappingURL=automation-scenarios.controller.js.map