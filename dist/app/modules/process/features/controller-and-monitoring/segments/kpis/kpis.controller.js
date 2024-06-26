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
exports.KPIsController = void 0;
const common_1 = require("@nestjs/common");
const kpis_service_1 = require("./kpis.service");
const kpis_dto_1 = require("./dto/kpis.dto");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../../../core/decorators/http-response-handler.decorator");
let KPIsController = class KPIsController {
    constructor(kpisService, processArchiveService) {
        this.kpisService = kpisService;
        this.processArchiveService = processArchiveService;
    }
    async addKPIs(createkpisDto) {
        try {
            const data = await this.kpisService.Upsert(createkpisDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'KPIs created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the KPIs');
            }
        }
    }
    async updateKPIsIsDeleted(processId, kpisId) {
        try {
            const archiveData = await this.kpisService.getByProcessById(processId);
            const result = await this.kpisService.updateKPIsIsDeleted(processId, kpisId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'kpis deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the kpis');
            }
        }
    }
};
exports.KPIsController = KPIsController;
__decorate([
    (0, common_1.Post)('kpis'),
    (0, swagger_1.ApiOperation)({ summary: 'Post kpis' }),
    (0, swagger_1.ApiBody)({ type: kpis_dto_1.UpsertKPIsDataDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'KPIs created successfully',
        type: kpis_dto_1.KPIsResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete kpis',
        type: kpis_dto_1.KPIsErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kpis_dto_1.UpsertKPIsDto]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "addKPIs", null);
__decorate([
    (0, common_1.Put)(':processId/kpis-delete/:kpisId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete kpis' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'kpisId',
        required: true,
        description: 'Kpis ID',
        example: 'kpis_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Kpis deleted',
        type: kpis_dto_1.KPIsDeleteResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete kpis',
        type: kpis_dto_1.KPIsDeleteErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('kpisId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "updateKPIsIsDeleted", null);
exports.KPIsController = KPIsController = __decorate([
    (0, swagger_1.ApiTags)('Kpis'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [kpis_service_1.KPIsService,
        process_archive_service_1.ProcessArchiveService])
], KPIsController);
//# sourceMappingURL=kpis.controller.js.map