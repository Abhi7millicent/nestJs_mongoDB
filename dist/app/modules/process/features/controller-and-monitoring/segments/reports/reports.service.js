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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../../../utils/process.utils");
const process_constants_1 = require("../../../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../../../shared/helper/generate-id.helper");
const process_repository_1 = require("../../../../process.repository");
const controller_and_monitoring_constant_1 = require("../../constant/controller-and-monitoring.constant");
let ReportsService = class ReportsService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async updateReports(processId, reportId, reportsDto) {
        const auditData = {
            last_modified_by: reportsDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete reportsDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['reports']), reportId, reportsDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async Upsert(createReportsDto) {
        const processId = createReportsDto._id;
        const reportsDto = createReportsDto.reports;
        const auditData = {
            last_modified_by: reportsDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const reportsToCreate = reportsDto.filter((dataDto) => !dataDto._id);
        const reportsToUpdate = reportsDto.filter((dataDto) => dataDto._id);
        let createdData = [];
        for (const dataDto of reportsToCreate) {
            dataDto._id = (0, generate_id_helper_1.generateId)(controller_and_monitoring_constant_1.reports);
            delete dataDto.last_modified_by;
            const value = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['reports']), dataDto);
            createdData.push(value);
        }
        try {
            const updatePromises = reportsToUpdate.map((dataDto) => this.updateReports(processId, dataDto._id, dataDto));
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
    async updateReportsIsDeleted(processId, reportId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['reports']), reportId);
    }
    async updateReportsIsSoftDeleted(processId, reportId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['reports']), reportId);
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map