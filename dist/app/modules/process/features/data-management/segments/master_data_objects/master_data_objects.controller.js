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
exports.MDOController = void 0;
const common_1 = require("@nestjs/common");
const master_data_objects_service_1 = require("./master_data_objects.service");
let MDOController = class MDOController {
    constructor(mdoService) {
        this.mdoService = mdoService;
    }
    async addMDO(id, mdoDto) {
        try {
            const data = await this.mdoService.addMDO(id, mdoDto);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'MDO created successfully',
                data: data,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: error.message,
                }, common_1.HttpStatus.NOT_FOUND);
            }
            else {
                throw new common_1.HttpException({
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Internal server error',
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async updateMDOIsDeleted(processId, mdoId) {
        return this.mdoService.updateMDOIsDeleted(processId, mdoId);
    }
    async updateMDOIsSoftDeleted(processId, mdoId) {
        return this.mdoService.updateMDOIsSoftDeleted(processId, mdoId);
    }
};
exports.MDOController = MDOController;
__decorate([
    (0, common_1.Post)('mdo/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], MDOController.prototype, "addMDO", null);
__decorate([
    (0, common_1.Put)(':processId/mdo/:mdoId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('mdoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MDOController.prototype, "updateMDOIsDeleted", null);
__decorate([
    (0, common_1.Put)(':processId/mdo/:mdoId'),
    __param(0, (0, common_1.Param)('processId')),
    __param(1, (0, common_1.Param)('mdoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MDOController.prototype, "updateMDOIsSoftDeleted", null);
exports.MDOController = MDOController = __decorate([
    (0, common_1.Controller)('api/process'),
    __metadata("design:paramtypes", [master_data_objects_service_1.MDOService])
], MDOController);
//# sourceMappingURL=master_data_objects.controller.js.map