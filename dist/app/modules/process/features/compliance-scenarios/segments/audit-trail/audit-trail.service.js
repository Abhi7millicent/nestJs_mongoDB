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
    async updateAuditTrailScenarios(processId, AuditTrailScenariosId, auditTrailScenariosDto) {
        const auditData = {
            last_modified_by: auditTrailScenariosDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete auditTrailScenariosDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail']), AuditTrailScenariosId, auditTrailScenariosDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async addAuditTrailScenarios(processId, auditTrailScenariosDto) {
        try {
            auditTrailScenariosDto._id = (0, generate_id_helper_1.generateId)(compliance_scenarios_constant_1.audit_trail_id);
            const auditData = {
                last_modified_by: auditTrailScenariosDto.last_modified_by,
                last_modified_on: new Date(),
            };
            delete auditTrailScenariosDto.last_modified_by;
            const data = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail']), auditTrailScenariosDto);
            console.log('data:', data);
            if (data._id === auditTrailScenariosDto._id) {
                const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
                console.log('updateMetaData:', updateResponseDto);
            }
            return data;
        }
        catch (error) {
            console.error('Error in addAuditTrailScenarios:', error);
            throw new Error(`Failed to add AuditTrailScenarios: ${error.message}`);
        }
    }
    async updateAuditTrailScenariosIsDeleted(processId, AuditTrailScenariosId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail']), AuditTrailScenariosId);
    }
    async updateAuditTrailScenariosIsSoftDeleted(processId, AuditTrailScenariosId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, compliance_scenarios_constant_1.ComplianceAndScenarios['audit_trail']), AuditTrailScenariosId);
    }
};
exports.AuditTrailScenariosService = AuditTrailScenariosService;
exports.AuditTrailScenariosService = AuditTrailScenariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], AuditTrailScenariosService);
//# sourceMappingURL=audit-trail.service.js.map