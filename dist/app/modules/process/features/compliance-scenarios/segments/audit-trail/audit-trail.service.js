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
exports.AuditTrailScenariosService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../../../utils/process.utils");
const process_constants_1 = require("../../../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../../../shared/helper/generate-id.helper");
const process_repository_1 = require("../../../../process.repository");
const compliance_scenarios_constant_1 = require("../../constant/compliance-scenarios.constant");
let AuditTrailScenariosService = class AuditTrailScenariosService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async getByProcessById(processId) {
        return this.processRepository.findById(processId);
    }
    async updateAuditTrailScenarios(processId, AuditTrailScenariosId, auditTrailScenariosDto) {
        const auditData = {
            last_modified_by: auditTrailScenariosDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete auditTrailScenariosDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail_scenarios']), AuditTrailScenariosId, auditTrailScenariosDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async upsertAuditTrailScenarios(createAuditTrailScenariosDto) {
        const processId = createAuditTrailScenariosDto._id;
        const auditTrailScenariosDto = createAuditTrailScenariosDto.audit_trail_scenarios;
        const auditData = {
            last_modified_by: auditTrailScenariosDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const auditTrailScenariosToCreate = auditTrailScenariosDto.filter((dataDto) => !dataDto._id);
        const auditTrailScenariosToUpdate = auditTrailScenariosDto.filter((dataDto) => dataDto._id);
        let createdData = [];
        for (const dataDto of auditTrailScenariosToCreate) {
            dataDto._id = (0, generate_id_helper_1.generateId)(compliance_scenarios_constant_1.audit_trail_id);
            delete dataDto.last_modified_by;
            const value = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail_scenarios']), dataDto);
            createdData.push(value);
        }
        try {
            const updatePromises = auditTrailScenariosToUpdate.map((automationDto) => this.updateAuditTrailScenarios(processId, automationDto._id, automationDto));
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
    async updateAuditTrailScenariosIsDeleted(processId, AuditTrailScenariosId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail_scenarios']), AuditTrailScenariosId);
    }
    async updateAuditTrailScenariosIsSoftDeleted(processId, AuditTrailScenariosId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail_scenarios']), AuditTrailScenariosId);
    }
};
exports.AuditTrailScenariosService = AuditTrailScenariosService;
exports.AuditTrailScenariosService = AuditTrailScenariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], AuditTrailScenariosService);
//# sourceMappingURL=audit-trail.service.js.map