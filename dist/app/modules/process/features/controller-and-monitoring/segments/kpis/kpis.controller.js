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
const response_handler_decorator_1 = require("../../../../../../../core/decorator/response-handler.decorator");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
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
    (0, response_handler_decorator_1.ResponseHandler)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kpis_dto_1.UpsertKPIsDto]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "addKPIs", null);
__decorate([
    (0, common_1.Put)(':processId/kpis-delete/:kpisId'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('kpisId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], KPIsController.prototype, "updateKPIsIsDeleted", null);
exports.KPIsController = KPIsController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [kpis_service_1.KPIsService,
        process_archive_service_1.ProcessArchiveService])
], KPIsController);
//# sourceMappingURL=kpis.controller.js.map