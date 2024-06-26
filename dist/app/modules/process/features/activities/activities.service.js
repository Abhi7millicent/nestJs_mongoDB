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
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const process_constants_1 = require("../../constant/process.constants");
const process_repository_1 = require("../../process.repository");
const process_utils_1 = require("../../helper/process.utils");
let ActivitiesService = class ActivitiesService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async getByProcessById(processId) {
        return this.processRepository.findById(processId);
    }
    async updateActivity(processId, activityId, activityDto) {
        const auditData = {
            last_modified_by: activityDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete activityDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'activities'), activityId, activityDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
    async updateActivityIsDeleted(processId, activityId) {
        return this.processRepository.deleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'activities'), activityId);
    }
    async updateActivityIsSoftDeleted(processId, activityId) {
        return this.processRepository.softDeleteByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'activities'), activityId);
    }
    async Upsert(createActivityDto) {
        const processId = createActivityDto._id;
        const activitiesDto = createActivityDto.activity;
        const auditData = {
            last_modified_by: activitiesDto[0].last_modified_by,
            last_modified_on: new Date(),
        };
        const activitiesToCreate = activitiesDto.filter((activityDto) => !activityDto._id);
        const activitiesToUpdate = activitiesDto.filter((activityDto) => activityDto._id);
        activitiesToCreate.forEach((activityDto) => {
            activityDto._id = (0, process_utils_1.generateId)('activity_');
            delete activityDto.last_modified_by;
        });
        try {
            const createPromises = activitiesToCreate.map((activityDto) => this.processRepository.createByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, 'activities'), activityDto));
            const updatePromises = activitiesToUpdate.map((activityDto) => this.updateActivity(processId, activityDto._id, activityDto));
            const createResults = await Promise.all(createPromises);
            const updateResults = await Promise.all(updatePromises);
            const allInsertionsSuccessful = createResults.every((data, index) => data._id === activitiesToCreate[index]._id);
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
exports.ActivitiesService = ActivitiesService;
exports.ActivitiesService = ActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ActivitiesService);
//# sourceMappingURL=activities.service.js.map