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
exports.ProcessDocumentService = void 0;
const common_1 = require("@nestjs/common");
const process_constants_1 = require("../../constant/process.constants");
const process_repository_1 = require("../../process.repository");
const process_utils_1 = require("../../helper/process.utils");
let ProcessDocumentService = class ProcessDocumentService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async upsert(createProcessDocumentDto) {
        const processId = createProcessDocumentDto._id;
        const processDocumentDto = createProcessDocumentDto.process_document;
        const auditData = {
            last_modified_by: processDocumentDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const processToCreate = processDocumentDto.filter((activityDto) => !activityDto._id);
        const processToUpdate = processDocumentDto.filter((activityDto) => activityDto._id);
        processToCreate.forEach((activityDto) => {
            activityDto._id = (0, process_utils_1.generateId)(process_constants_1.process_document_id);
            delete activityDto.last_modified_by;
        });
        try {
            const createPromises = processToCreate.map((activityDto) => this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_document), activityDto));
            const updatePromises = processToUpdate.map((activityDto) => this.updateProcessDocument(processId, activityDto._id, activityDto));
            const createResults = await Promise.all(createPromises);
            const updateResults = await Promise.all(updatePromises);
            const allInsertionsSuccessful = createResults.every((data, index) => data._id === processToCreate[index]._id);
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
    async getByProcessById(processId) {
        return this.processRepository.findById(processId);
    }
    findAll() {
        return `This action returns all processDocument`;
    }
    findOne(id) {
        return `This action returns a #${id} processDocument`;
    }
    async updateProcessDocument(processId, pdId, updateProcessDocumentDto) {
        const auditData = {
            last_modified_by: updateProcessDocumentDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete updateProcessDocumentDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_document), pdId, updateProcessDocumentDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async updateProcessDocumentIsDeleted(processId, pdId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_document), pdId);
    }
    async updateProcessDocumentsIsSoftDeleted(processId, pdId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.process_document), pdId);
    }
    remove(id) {
        return `This action removes a #${id} processDocument`;
    }
};
exports.ProcessDocumentService = ProcessDocumentService;
exports.ProcessDocumentService = ProcessDocumentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ProcessDocumentService);
//# sourceMappingURL=process-document.service.js.map