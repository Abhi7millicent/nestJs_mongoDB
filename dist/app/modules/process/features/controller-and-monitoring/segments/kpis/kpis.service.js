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
exports.KPIsService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../../../utils/process.utils");
const process_constants_1 = require("../../../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../../../shared/helper/generate-id.helper");
const process_repository_1 = require("../../../../process.repository");
const controller_and_monitoring_constant_1 = require("../../constant/controller-and-monitoring.constant");
let KPIsService = class KPIsService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async updateKPIs(processId, kpisId, kpisDto) {
        const auditData = {
            last_modified_by: kpisDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete kpisDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['kpis']), kpisId, kpisDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async Upsert(createkpisDto) {
        const processId = createkpisDto._id;
        const kpisDto = createkpisDto.kpis;
        const auditData = {
            last_modified_by: kpisDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const kpisToCreate = kpisDto.filter((dataDto) => !dataDto._id);
        const kpisToUpdate = kpisDto.filter((dataDto) => dataDto._id);
        kpisToCreate.forEach((dataDto) => {
            dataDto._id = (0, generate_id_helper_1.generateId)(controller_and_monitoring_constant_1.kpis);
            delete dataDto.last_modified_by;
        });
        try {
            const createPromises = kpisToCreate.map((dataDto) => this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['kpis']), dataDto));
            const updatePromises = kpisToUpdate.map((dataDto) => this.updateKPIs(processId, dataDto._id, dataDto));
            const createResults = await Promise.all(createPromises);
            const updateResults = await Promise.all(updatePromises);
            const allInsertionsSuccessful = createResults.every((data, index) => data._id === kpisToCreate[index]._id);
            if (allInsertionsSuccessful ||
                updateResults.every((result) => result.acknowledged)) {
                const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
                console.log('updateMetaData:', updateResponseDto);
            }
            return {
                created: createResults,
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
    async updateKPIsIsDeleted(processId, kpisId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['kpis']), kpisId);
    }
    async updateKPIsIsSoftDeleted(processId, kpisId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, controller_and_monitoring_constant_1.controlAndMonitoring['kpis']), kpisId);
    }
};
exports.KPIsService = KPIsService;
exports.KPIsService = KPIsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], KPIsService);
//# sourceMappingURL=kpis.service.js.map