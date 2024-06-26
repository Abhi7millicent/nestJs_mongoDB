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
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../core/decorators/http-response-handler.decorator");
let ActivitiesController = class ActivitiesController {
    constructor(activitiesService, processArchiveService) {
        this.activitiesService = activitiesService;
        this.processArchiveService = processArchiveService;
    }
    async addActivity(createActivityDto) {
        try {
            const data = await this.activitiesService.Upsert(createActivityDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'Activity created successfully',
                data: data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else if (error instanceof common_1.BadRequestException) {
                throw new common_1.BadRequestException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to create the activity');
            }
        }
    }
    async updateActivityIsDeleted(processId, activityId) {
        try {
            const archiveData = await this.activitiesService.getByProcessById(processId);
            const result = await this.activitiesService.updateActivityIsDeleted(processId, activityId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Activity deleted successfully',
                data: {
                    processId: processId,
                    activityId: activityId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the activity');
            }
        }
    }
};
exports.ActivitiesController = ActivitiesController;
__decorate([
    (0, common_1.Post)('/activities'),
    (0, swagger_1.ApiOperation)({ summary: 'Post activity' }),
    (0, swagger_1.ApiBody)({ type: activities_dto_1.CreateActivityDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Activity created successfully',
        type: activities_dto_1.CreateActivityResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to create the activity',
        type: activities_dto_1.ErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activities_dto_1.CreateActivityDto]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "addActivity", null);
__decorate([
    (0, common_1.Put)(':processId/activities-delete/:activityId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete activity' }),
    (0, swagger_1.ApiParam)({
        name: 'activityId',
        type: 'string',
        description: 'Enter activity ID',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        type: 'string',
        description: 'Enter process ID',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: activities_dto_1.ActivityDeletedResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 500, type: activities_dto_1.ErrorResponsePutDto }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('activityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ActivitiesController.prototype, "updateActivityIsDeleted", null);
exports.ActivitiesController = ActivitiesController = __decorate([
    (0, swagger_1.ApiTags)('Activities'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [activities_service_1.ActivitiesService,
        process_archive_service_1.ProcessArchiveService])
], ActivitiesController);
//# sourceMappingURL=activities.controller.js.map