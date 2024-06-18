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
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../../../core/decorator/http-response-handler.decorator");
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
                data: {
                    processId: processId,
                    analyticalDashboardsId: analyticalDashboardsId,
                },
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
    (0, swagger_1.ApiOperation)({ summary: 'Post Analytical dashboard' }),
    (0, swagger_1.ApiBody)({ type: analytical_dashboards_dto_1.AnalyticalDashboardDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'AnalyticalDashboards created successfully',
        type: analytical_dashboards_dto_1.AnalyticalDashboardApiResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete analytical dashboard',
        type: analytical_dashboards_dto_1.AnalyticalDashboardErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytical_dashboards_dto_1.UpsertAnalyticalDashboardsDto]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "upsertAnalyticalDashboards", null);
__decorate([
    (0, common_1.Put)(':processId/analytical-dashboards-delete/:analyticalDashboardsId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete analytical dashboard' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'analyticalDashboardId',
        required: true,
        description: 'Analytical dashboard ID',
        example: 'ad_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Analytical dashboard deleted',
        type: analytical_dashboards_dto_1.AnalyticalDashboardDeleteResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete analytical dashboard',
        type: analytical_dashboards_dto_1.AnalyticalDashboardDeleteErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('analyticalDashboardsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalyticalDashboardsController.prototype, "updateAnalyticalDashboardsIsDeleted", null);
exports.AnalyticalDashboardsController = AnalyticalDashboardsController = __decorate([
    (0, swagger_1.ApiTags)('Analytical-dashboard'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [analytical_dashboards_service_1.AnalyticalDashboardsService,
        process_archive_service_1.ProcessArchiveService])
], AnalyticalDashboardsController);
//# sourceMappingURL=analytical-dashboards.controller.js.map