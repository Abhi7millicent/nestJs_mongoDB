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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesController = void 0;
const common_1 = require("@nestjs/common");
const activities_service_1 = require("./activities.service");
const activities_dto_1 = require("./dto/activities.dto");
let ActivitiesController = class ActivitiesController {
    constructor(activitiesService) {
        this.activitiesService = activitiesService;
    }
    async addActivity(createActivityDto) {
        try {
            const data = await this.activitiesService.Upsert(createActivityDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Activity created successfully',
                data: data,
            };
        }
        catch (error) {
            console.error('Error in addActivity controller method:', error.message);
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Internal server error',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async updateActivity(processId, activityId, activityData) {
        return this.activitiesService.updateActivity(processId, activityId, activityData);
    }
    async updateActivityIsDeleted(processId, activityId) {
        return this.activitiesService.updateActivityIsDeleted(processId, activityId);
    }
    async updateActivityIsSoftDeleted(processId, activityId) {
        return this.activitiesService.updateActivityIsSoftDeleted(processId, activityId);
    }
};
exports.ActivitiesController = ActivitiesController;
__decorate([
    (0, common_1.Post)('/activities'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activities_dto_1.UpsertActivityDto]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "addActivity", null);
__decorate([
    (0, common_1.Put)(':processId/activities/:activityId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('activityId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "updateActivity", null);
__decorate([
    (0, common_1.Put)(':processId/activities-delete/:activityId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('activityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "updateActivityIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/activities-soft-delete/:activityId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('activityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "updateActivityIsSoftDeleted", null);
exports.ActivitiesController = ActivitiesController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [activities_service_1.ActivitiesService])
], ActivitiesController);
//# sourceMappingURL=activities.controller.js.map