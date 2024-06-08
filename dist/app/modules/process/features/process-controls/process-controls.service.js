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
exports.ProcessControlsService = void 0;
const common_1 = require("@nestjs/common");
const process_constants_1 = require("../../constant/process.constants");
const generate_id_helper_1 = require("../../../../../shared/helper/generate-id.helper");
const process_utils_1 = require("../../utils/process.utils");
const process_repository_1 = require("../../process.repository");
let ProcessControlsService = class ProcessControlsService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async create(processId, processControlsDto) {
        try {
            processControlsDto._id = (0, generate_id_helper_1.generateId)(process_constants_1.process_controls_id);
            const auditData = {
                last_modified_by: processControlsDto.last_modified_by,
                last_modified_on: new Date(),
            };
            delete processControlsDto.last_modified_by;
            const data = await this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_controls), processControlsDto);
            if (data._id === processControlsDto._id) {
                const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
                console.log('updateMetaData:', updateResponseDto);
            }
            return data;
        }
        catch (error) {
            console.error('Error in addWorkflows:', error);
            throw new Error(`Failed to add workflows: ${error.message}`);
        }
    }
    findAll() {
        return `This action returns all queriesResponses`;
    }
    findOne(id) {
        return `This action returns a #${id} queriesResponse`;
    }
    async update(processId, qrId, updateprocessControlsDto) {
        const auditData = {
            last_modified_by: updateprocessControlsDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete updateprocessControlsDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_controls), qrId, updateprocessControlsDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_controls), qrId);
    }
    async updateQueriesResponsesIsSoftDeleted(processId, workflowId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_controls), workflowId);
    }
    remove(id) {
        return `This action removes a #${id} queriesResponse`;
    }
};
exports.ProcessControlsService = ProcessControlsService;
exports.ProcessControlsService = ProcessControlsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ProcessControlsService);
//# sourceMappingURL=process-controls.service.js.map