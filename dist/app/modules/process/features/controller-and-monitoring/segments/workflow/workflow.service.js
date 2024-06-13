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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowsService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../../../utils/process.utils");
const process_constants_1 = require("../../../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../../../shared/helper/generate-id.helper");
const process_repository_1 = require("../../../../process.repository");
const controller_and_monitoring_constant_1 = require("../../constant/controller-and-monitoring.constant");
let WorkflowsService = class WorkflowsService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async updateWorkflow(processId, workflowId, workflowsDto) {
        const auditData = {
            last_modified_by: workflowsDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete workflowsDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['workflows']), workflowId, workflowsDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async upsert(createWorkflowsDto) {
        const processId = createWorkflowsDto._id;
        const workflowsDto = createWorkflowsDto.workflows;
        const auditData = {
            last_modified_by: workflowsDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const workflowToCreate = workflowsDto.filter((dataDto) => !dataDto._id);
        const workflowToUpdate = workflowsDto.filter((dataDto) => dataDto._id);
        let createdData = [];
        for (const dataDto of workflowToCreate) {
            dataDto._id = (0, generate_id_helper_1.generateId)(controller_and_monitoring_constant_1.workflow);
            delete dataDto.last_modified_by;
            const value = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['workflows']), dataDto);
            createdData.push(value);
        }
        try {
            const updatePromises = workflowToUpdate.map((dataDto) => this.updateWorkflow(processId, dataDto._id, dataDto));
            console.log('updatePromises:', updatePromises);
            const updateResults = await Promise.all(updatePromises);
            if (updateResults.every((result) => result.acknowledged)) {
                const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
                console.log('updateMetaData:', updateResponseDto);
            }
            return {
                created: createdData,
                updated: updateResults,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                console.error('Not Found Exception:', error.message);
                throw error;
            }
            else {
                console.error('Unexpected Error:', error.message);
                throw error;
            }
        }
    }
    async updateWorkflowsIsDeleted(processId, workflowId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['workflows']), workflowId);
    }
    async updateWorkflowsIsSoftDeleted(processId, workflowId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['workflows']), workflowId);
    }
};
exports.WorkflowsService = WorkflowsService;
exports.WorkflowsService = WorkflowsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], WorkflowsService);
//# sourceMappingURL=workflow.service.js.map