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
exports.AutomationScenarioService = void 0;
const common_1 = require("@nestjs/common");
const process_utils_1 = require("../../utils/process.utils");
const process_constants_1 = require("../../constant/process.constants");
const process_repository_1 = require("../../process.repository");
let AutomationScenarioService = class AutomationScenarioService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async updateAutomationScenario(processId, automationScenarioId, automationScenarioDto) {
        const auditData = {
            last_modified_by: automationScenarioDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete automationScenarioDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'automation_scenarios'), automationScenarioId, automationScenarioDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async updateAutomationScenarioIsDeleted(processId, automationScenarioId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'automation_scenarios'), automationScenarioId);
    }
    async updateAutomationScenarioIsSoftDeleted(processId, automationScenarioId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'automation_scenarios'), automationScenarioId);
    }
    async upsertAutomationScenario(upsertAutomationScenarioDto) {
        const processId = upsertAutomationScenarioDto._id;
        const automationScenarioDto = upsertAutomationScenarioDto.automation_scenario;
        const auditData = {
            last_modified_by: automationScenarioDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const automationScenarioToCreate = automationScenarioDto.filter((automationDto) => !automationDto._id);
        const automationScenarioToUpdate = automationScenarioDto.filter((automationDto) => automationDto._id);
        automationScenarioToCreate.forEach((automationDto) => {
            automationDto._id = (0, process_utils_1.generateId)('as_');
            delete automationDto.last_modified_by;
        });
        try {
            const createPromises = automationScenarioToCreate.map((automationDto) => this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'automation_scenarios'), automationDto));
            const updatePromises = automationScenarioToUpdate.map((automationDto) => this.updateAutomationScenario(processId, automationDto._id, automationDto));
            const createResults = await Promise.all(createPromises);
            const updateResults = await Promise.all(updatePromises);
            const allInsertionsSuccessful = createResults.every((data, index) => data._id === automationScenarioToCreate[index]._id);
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
};
exports.AutomationScenarioService = AutomationScenarioService;
exports.AutomationScenarioService = AutomationScenarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], AutomationScenarioService);
//# sourceMappingURL=automation-scenarios.service.js.map