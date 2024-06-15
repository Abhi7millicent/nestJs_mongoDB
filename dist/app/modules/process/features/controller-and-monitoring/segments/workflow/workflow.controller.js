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
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
let WorkflowsController = class WorkflowsController {
    constructor(workflowsService, processArchiveService) {
        this.workflowsService = workflowsService;
        this.processArchiveService = processArchiveService;
    }
    async addWorkflows(createWorkflowsDto) {
        try {
            const data = await this.workflowsService.upsert(createWorkflowsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'work-flows created successfully',
                data: data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof common_1.BadRequestException) {
                throw new common_1.BadRequestException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to create the work-flows');
            }
        }
    }
    async updateWorkflowsIsDeleted(processId, workflowId) {
        try {
            const archiveData = await this.workflowsService.getByProcessById(processId);
            const result = await this.workflowsService.updateWorkflowsIsDeleted(processId, workflowId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'workflows deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the workflows');
            }
        }
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('work-flows'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workflows_dto_1.UpsertWorkflowsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addWorkflows", null);
__decorate([
    (0, common_1.Put)(':processId/workflows-delete/:workflowId'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('workflowId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateWorkflowsIsDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [workflow_service_1.WorkflowsService,
        process_archive_service_1.ProcessArchiveService])
], WorkflowsController);
//# sourceMappingURL=workflow.controller.js.map