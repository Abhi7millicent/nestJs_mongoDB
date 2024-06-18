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
exports.WorkflowsController = void 0;
const common_1 = require("@nestjs/common");
const reports_service_1 = require("./reports.service");
const reports_dto_1 = require("./dto/reports.dto");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../../../core/decorators/http-response-handler.decorator");
let WorkflowsController = class WorkflowsController {
    constructor(reportsService, processArchiveService) {
        this.reportsService = reportsService;
        this.processArchiveService = processArchiveService;
    }
    async addReports(createReportsDto) {
        try {
            const data = await this.reportsService.Upsert(createReportsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'reports created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the reports');
            }
        }
    }
    async updateReportsIsDeleted(processId, reportsId) {
        try {
            const archiveData = await this.reportsService.getByProcessById(processId);
            const result = await this.reportsService.updateReportsIsDeleted(processId, reportsId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'reports deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the reports');
            }
        }
    }
};
exports.WorkflowsController = WorkflowsController;
__decorate([
    (0, common_1.Post)('reports'),
    (0, swagger_1.ApiOperation)({ summary: 'Post report' }),
    (0, swagger_1.ApiBody)({ type: reports_dto_1.ReportData }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Reports created successfully',
        type: reports_dto_1.CreatedReportResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete report',
        type: reports_dto_1.FailedReportResponse,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reports_dto_1.UpsertReportsDto]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "addReports", null);
__decorate([
    (0, common_1.Put)(':processId/reports-delete/:reportsId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete report' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'reportId',
        required: true,
        description: 'Report ID',
        example: 'report_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Report deleted',
        type: reports_dto_1.DeletedReportResponse,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete report',
        type: reports_dto_1.FailedReportDeletionResponse,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('reportsId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WorkflowsController.prototype, "updateReportsIsDeleted", null);
exports.WorkflowsController = WorkflowsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService,
        process_archive_service_1.ProcessArchiveService])
], WorkflowsController);
//# sourceMappingURL=reports.controller.js.map