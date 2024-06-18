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
exports.AuditTrailScenariosController = void 0;
const common_1 = require("@nestjs/common");
const audit_trail_service_1 = require("./audit-trail.service");
const audit_trail_dto_1 = require("./dto/audit-trail.dto");
const process_archive_service_1 = require("../../../../../archive/process-archive/process-archive.service");
const swagger_1 = require("@nestjs/swagger");
const http_response_handler_decorator_1 = require("../../../../../../../core/decorators/http-response-handler.decorator");
let AuditTrailScenariosController = class AuditTrailScenariosController {
    constructor(auditTrailScenariosService, processArchiveService) {
        this.auditTrailScenariosService = auditTrailScenariosService;
        this.processArchiveService = processArchiveService;
    }
    async upsertAuditTrailScenarios(createAuditTrailScenariosDto) {
        try {
            const data = await this.auditTrailScenariosService.upsertAuditTrailScenarios(createAuditTrailScenariosDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'AuditTrailScenarios created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the AuditTrailScenarios');
            }
        }
    }
    async updateWorkflowsIsDeleted(processId, auditTrailScenariosId) {
        try {
            const archiveData = await this.auditTrailScenariosService.getByProcessById(processId);
            const result = await this.auditTrailScenariosService.updateAuditTrailScenariosIsDeleted(processId, auditTrailScenariosId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'AuditTrailScenarios deleted successfully',
                data: {
                    processId: processId,
                    auditTrailScenariosId: auditTrailScenariosId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the AuditTrailScenarios');
            }
        }
    }
};
exports.AuditTrailScenariosController = AuditTrailScenariosController;
__decorate([
    (0, common_1.Post)('audit-trail-scenarios'),
    (0, swagger_1.ApiOperation)({ summary: 'Post Audit trail' }),
    (0, swagger_1.ApiBody)({ type: audit_trail_dto_1.AuditTrailDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Audit trail created',
        type: audit_trail_dto_1.ApiResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to create audit trail',
        type: audit_trail_dto_1.CreateAuditTrailErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [audit_trail_dto_1.UpsertAuditTrailScenariosDto]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "upsertAuditTrailScenarios", null);
__decorate([
    (0, common_1.Put)(':processId/audit-trail-scenarios-delete/:auditTrailScenariosId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete Audit trail' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'auditTrailScenariosId',
        required: true,
        description: 'Audit Trail Scenarios ID',
        example: 'at_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Audit trail deleted',
        type: audit_trail_dto_1.DeleteAuditTrailResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete audit trail',
        type: audit_trail_dto_1.DeleteAuditTrailErrorResponseDto,
    }),
    (0, http_response_handler_decorator_1.HttpResponse)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('auditTrailScenariosId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuditTrailScenariosController.prototype, "updateWorkflowsIsDeleted", null);
exports.AuditTrailScenariosController = AuditTrailScenariosController = __decorate([
    (0, swagger_1.ApiTags)('Audit-trail'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [audit_trail_service_1.AuditTrailScenariosService,
        process_archive_service_1.ProcessArchiveService])
], AuditTrailScenariosController);
//# sourceMappingURL=audit-trail.controller.js.map