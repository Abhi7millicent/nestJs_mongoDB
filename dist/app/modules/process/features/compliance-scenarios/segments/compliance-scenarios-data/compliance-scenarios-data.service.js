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
    async addComplianceScenariosData(processId, complianceScenarioDataDto) {
        try {
            complianceScenarioDataDto._id = (0, generate_id_helper_1.generateId)(compliance_scenarios_constant_1.Compliance_Scenarios_id);
            const auditData = {
                last_modified_by: complianceScenarioDataDto.last_modified_by,
                last_modified_on: new Date(),
            };
            delete complianceScenarioDataDto.last_modified_by;
            const data = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['compliance_scenarios_data']), complianceScenarioDataDto);
            console.log('data:', data);
            if (data._id === complianceScenarioDataDto._id) {
                const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
                console.log('updateMetaData:', updateResponseDto);
            }
            return data;
        }
        catch (error) {
            console.error('Error in add complianceScenarioData:', error);
            throw new Error(`Failed to add complianceScenarioData: ${error.message}`);
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