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
exports.ComplianceScenariosDataService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../../../utils/process.utils");
const process_constants_1 = require("../../../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../../../shared/helper/generate-id.helper");
const process_repository_1 = require("../../../../process.repository");
const compliance_scenarios_constant_1 = require("../../constant/compliance-scenarios.constant");
let ComplianceScenariosDataService = class ComplianceScenariosDataService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async getByProcessById(processId) {
        return this.processRepository.findById(processId);
    }
    async updateComplianceScenariosData(processId, complianceScenarioDataId, complianceScenarioDataDto) {
        const auditData = {
            last_modified_by: complianceScenarioDataDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete complianceScenarioDataDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['compliance_scenarios_data']), complianceScenarioDataId, complianceScenarioDataDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async upsertComplianceScenariosData(createComplianceScenarioDataDto) {
        const processId = createComplianceScenarioDataDto._id;
        const complianceScenarioDataDto = createComplianceScenarioDataDto.compliance_scenario;
        const auditData = {
            last_modified_by: complianceScenarioDataDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const complianceScenariosToCreate = complianceScenarioDataDto.filter((dataDto) => !dataDto._id);
        const complianceScenariosToUpdate = complianceScenarioDataDto.filter((dataDto) => dataDto._id);
        let createdData = [];
        for (const dataDto of complianceScenariosToCreate) {
            dataDto._id = (0, generate_id_helper_1.generateId)(compliance_scenarios_constant_1.Compliance_Scenarios_id);
            delete dataDto.last_modified_by;
            const value = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['compliance_scenarios_data']), dataDto);
            createdData.push(value);
        }
        try {
            const updatePromises = complianceScenariosToUpdate.map((automationDto) => this.updateComplianceScenariosData(processId, automationDto._id, automationDto));
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
    async updateComplianceScenariosDataIsDeleted(processId, complianceScenarioDataId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['compliance_scenarios_data']), complianceScenarioDataId);
    }
    async updateComplianceScenariosDataIsSoftDeleted(processId, complianceScenarioDataId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['compliance_scenarios_data']), complianceScenarioDataId);
    }
};
exports.ComplianceScenariosDataService = ComplianceScenariosDataService;
exports.ComplianceScenariosDataService = ComplianceScenariosDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ComplianceScenariosDataService);
//# sourceMappingURL=compliance-scenarios-data.service.js.map