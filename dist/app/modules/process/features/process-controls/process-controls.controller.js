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
exports.ProcessControlsController = void 0;
const common_1 = require("@nestjs/common");
const process_controls_service_1 = require("./process-controls.service");
const process_controls_dto_1 = require("./dto/process-controls.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
let ProcessControlsController = class ProcessControlsController {
    constructor(processControlsService, processArchiveService) {
        this.processControlsService = processControlsService;
        this.processArchiveService = processArchiveService;
    }
    async create(upsertProcessControlsDto) {
        try {
            const data = await this.processControlsService.upsert(upsertProcessControlsDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'process-controls created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the process-controls');
            }
        }
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        try {
            const archiveData = await this.processControlsService.getByProcessById(processId);
            const result = await this.processControlsService.updatequeriesresponseIsDeleted(processId, qrId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'processArchive deleted successfully',
                data: result,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the processArchive');
            }
        }
    }
};
exports.ProcessControlsController = ProcessControlsController;
__decorate([
    (0, common_1.Post)('process-controls'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_controls_dto_1.UpsertProcessControlsDto]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/process-controls-delete/:qrId'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProcessControlsController.prototype, "updatequeriesresponseIsDeleted", null);
exports.ProcessControlsController = ProcessControlsController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_controls_service_1.ProcessControlsService,
        process_archive_service_1.ProcessArchiveService])
], ProcessControlsController);
//# sourceMappingURL=process-controls.controller.js.map