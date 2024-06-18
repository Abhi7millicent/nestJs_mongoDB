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
exports.QueriesResponsesController = void 0;
const common_1 = require("@nestjs/common");
const queries_responses_service_1 = require("./queries-responses.service");
const queries_response_dto_1 = require("./dto/queries-response.dto");
const process_archive_service_1 = require("../../../archive/process-archive/process-archive.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
const swagger_1 = require("@nestjs/swagger");
let QueriesResponsesController = class QueriesResponsesController {
    constructor(queriesResponsesService, processArchiveService) {
        this.queriesResponsesService = queriesResponsesService;
        this.processArchiveService = processArchiveService;
    }
    async create(createQueriesResponseDto) {
        try {
            const data = await this.queriesResponsesService.Upsert(createQueriesResponseDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'queries-responses created successfully',
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
                throw new common_1.InternalServerErrorException('Failed to create the queries-responses');
            }
        }
    }
    async updatequeriesresponseIsDeleted(processId, qrId) {
        try {
            const archiveData = await this.queriesResponsesService.getByProcessById(processId);
            const result = await this.queriesResponsesService.updatequeriesresponseIsDeleted(processId, qrId);
            if (result) {
                const data = await this.processArchiveService.create(archiveData);
                console.log('object:', data);
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'queriesResponses deleted successfully',
                data: {
                    processId: processId,
                    qrId: qrId,
                },
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the queriesResponses');
            }
        }
    }
};
exports.QueriesResponsesController = QueriesResponsesController;
__decorate([
    (0, common_1.Post)('queries-responses'),
    (0, swagger_1.ApiOperation)({ summary: 'Post queries and response' }),
    (0, swagger_1.ApiBody)({ type: queries_response_dto_1.CreateQueryResponseDto }),
    (0, swagger_1.ApiResponse)({ status: 201, type: queries_response_dto_1.CreateQueryResponseResponseDto }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to create queries and response',
        type: queries_response_dto_1.DeleteQueryResponseErrorDto,
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queries_response_dto_1.UpsertQueriesResponseDto]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':processId/qr-delete/:qrId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete queries and response' }),
    (0, swagger_1.ApiParam)({
        name: 'processId',
        required: true,
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    (0, swagger_1.ApiParam)({
        name: 'quriesResponseId',
        required: true,
        description: 'Queries and response ID',
        example: 'qr_ruyuwn69e',
    }),
    (0, swagger_1.ApiResponse)({ status: 201, type: queries_response_dto_1.DeleteQueriesResponseSuccessDto }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Failed to delete queries and response',
        type: queries_response_dto_1.DeleteQueryPutResponseErrorDto,
    }),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('qrId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], QueriesResponsesController.prototype, "updatequeriesresponseIsDeleted", null);
exports.QueriesResponsesController = QueriesResponsesController = __decorate([
    (0, swagger_1.ApiTags)('Queries-responses'),
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [queries_responses_service_1.QueriesResponsesService,
        process_archive_service_1.ProcessArchiveService])
], QueriesResponsesController);
//# sourceMappingURL=queries-responses.controller.js.map