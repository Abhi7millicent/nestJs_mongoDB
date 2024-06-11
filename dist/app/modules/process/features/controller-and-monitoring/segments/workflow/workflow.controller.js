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
const workflow_service_1 = require("./workflow.service");
const workflows_dto_1 = require("./dto/workflows.dto");
let WorkflowsController = class WorkflowsController {
    constructor(workflowsService) {
        this.workflowsService = workflowsService;
    }
    async addWorkflows(createWorkflowsDto) {
        return this.workflowsService.Upsert(createWorkflowsDto);
    }
    async updateWorkflow(processId, workflowId, workflowData) {
        return this.workflowsService.updateWorkflow(processId, workflowId, workflowData);
    }
    async updateWorkflowsIsDeleted(processId, workflowId) {
        return this.workflowsService.updateWorkflowsIsDeleted(processId, workflowId);
    }
    async updateWorkflowsIsSoftDeleted(processId, workflowId) {
        return this.workflowsService.updateWorkflowsIsSoftDeleted(processId, workflowId);
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('work-flows'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workflows_dto_1.UpsertWorkflowsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addWorkflows", null);
__decorate([
    (0, common_1.Put)(':processId/workflows/:workflowId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('workflowId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateWorkflow", null);
__decorate([
    (0, common_1.Put)(':processId/workflows-delete/:workflowId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('workflowId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateWorkflowsIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/workflows-soft-delete/:workflowId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('workflowId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateWorkflowsIsSoftDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [workflow_service_1.WorkflowsService])
], WorkflowsController);
//# sourceMappingURL=workflow.controller.js.map