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
const integration_scenarios_service_1 = require("./integration-scenarios.service");
const integration_scenarios_dto_1 = require("./dto/integration-scenarios.dto");
const swagger_1 = require("@nestjs/swagger");
let IntegrationScenarioController = class IntegrationScenarioController {
    constructor(integrationScenarioService) {
        this.integrationScenarioService = integrationScenarioService;
    }
    async updateIntegrationScenario(processId, integrationScenarioId, updateIntegrationScenarioDto) {
        return this.integrationScenarioService.update(processId, integrationScenarioId, updateIntegrationScenarioDto);
    }
};
exports.IntegrationScenarioController = IntegrationScenarioController;
__decorate([
    (0, common_1.Put)(':processId/integration-scenario'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete integration scenario' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiBody)({ type: integration_scenarios_dto_1.UpdateIntegrationScenarioDataDto }),
    (0, swagger_1.ApiResponse)({ status: 200, type: integration_scenarios_dto_1.IntegrationProcessResponseDTO }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete integration scenario',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        statusCode: { type: 'number', example: 500 },
                        success: { type: 'boolean', example: false },
                        error: {
                            type: 'string',
                            example: 'Failed to delete integration scenario',
                        },
                    },
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('processId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, integration_scenarios_dto_1.UpdateIntegrationScenarioDto]),
    __metadata("design:returntype", Promise)
], IntegrationScenarioController.prototype, "updateIntegrationScenario", null);
exports.IntegrationScenarioController = IntegrationScenarioController = __decorate([
    (0, swagger_1.ApiTags)('Integration-scenarios'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [integration_scenarios_service_1.IntegrationScenarioService])
], IntegrationScenarioController);
//# sourceMappingURL=integration-scenarios.controller.js.map