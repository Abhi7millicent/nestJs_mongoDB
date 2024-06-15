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
exports.ProcessController = void 0;
const common_1 = require("@nestjs/common");
const process_service_1 = require("./process.service");
const process_dto_1 = require("./dto/process.dto");
const process_archive_service_1 = require("../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../core/decorator/response-handler.decorator");
let ProcessController = class ProcessController {
    constructor(processService, processArchiveService) {
        this.processService = processService;
        this.processArchiveService = processArchiveService;
    }
    async createProcess(createProcessDto) {
        try {
            const data = await this.processService.createProcess(createProcessDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'Process created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the Process');
            }
        }
    }
    async getAll() {
        const data = await this.processService.getAllProcess();
        try {
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: 'Processes retrieved successfully',
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
                throw new common_1.InternalServerErrorException('Failed to retrieved the Process');
            }
        }
    }
    async getById(id) {
        try {
            const data = await this.processService.getProcessById(id);
            return {
                statusCode: common_1.HttpStatus.OK,
                success: true,
                message: 'Process retrieved successfully',
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
                throw new common_1.InternalServerErrorException('Failed to retrieved the Process');
            }
        }
    }
    async delete(id) {
        try {
            const archiveData = await this.processService.getByProcessById(id);
            const result = await this.processService.deleteProcess(id);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: `processId: ${id} deleted successfully`,
                data: { processId: id },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the process');
            }
        }
    }
};
exports.ProcessController = ProcessController;
__decorate([
    (0, common_1.Post)(),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_dto_1.CreateProcessDto]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "createProcess", null);
__decorate([
    (0, common_1.Get)(),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "delete", null);
exports.ProcessController = ProcessController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [process_service_1.ProcessService,
        process_archive_service_1.ProcessArchiveService])
], ProcessController);
//# sourceMappingURL=process.controller.js.map