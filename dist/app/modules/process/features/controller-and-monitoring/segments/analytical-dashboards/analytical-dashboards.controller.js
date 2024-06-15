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
exports.AnalyticalDashboardsController = void 0;
const common_1 = require("@nestjs/common");
const analytical_dashboards_service_1 = require("./analytical-dashboards.service");
const analytical_dashboards_dto_1 = require("./dto/analytical-dashboards.dto");
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
let AnalyticalDashboardsController = class AnalyticalDashboardsController {
    constructor(analyticalDashboardsService, processArchiveService) {
        this.analyticalDashboardsService = analyticalDashboardsService;
        this.processArchiveService = processArchiveService;
    }
    async upsertAnalyticalDashboards(createAnalyticalDashboardsDto) {
        try {
            const data = await this.analyticalDashboardsService.Upsert(createAnalyticalDashboardsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'AnalyticalDashboards created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the AnalyticalDashboards');
            }
        }
    }
    async updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId) {
        try {
            const archiveData = await this.analyticalDashboardsService.getByProcessById(processId);
            const result = await this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(processId, analyticalDashboardsId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'analyticalDashboards deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the analyticalDashboards');
            }
        }
    }
};
exports.AnalyticalDashboardsController = AnalyticalDashboardsController;
__decorate([
    (0, common_1.Post)('analytical-dashboards'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytical_dashboards_dto_1.UpsertAnalyticalDashboardsDto]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "upsertAnalyticalDashboards", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-dashboards-delete/:analyticalDashboardsId'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboardsIsDeleted", null);
exports.AnalyticalDashboardsController = AnalyticalDashboardsController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [analytical_dashboards_service_1.AnalyticalDashboardsService,
        process_archive_service_1.ProcessArchiveService])
], AnalyticalDashboardsController);
//# sourceMappingURL=analytical-dashboards.controller.js.map