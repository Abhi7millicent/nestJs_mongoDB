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
exports.BasicDataController = void 0;
const common_1 = require("@nestjs/common");
const basic_data_service_1 = require("./basic-data.service");
const response_handler_decorator_1 = require("../../../../../core/decorator/response-handler.decorator");
let BasicDataController = class BasicDataController {
    constructor(basicDataService) {
        this.basicDataService = basicDataService;
    }
    async update(id, data) {
        try {
            const vlaue = await this.basicDataService.updateProcessBasicData(id, data);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                success: true,
                message: 'Activity not updated successfully',
                data: vlaue,
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
                throw new common_1.InternalServerErrorException('Failed to update the activity');
            }
        }
    }
};
exports.BasicDataController = BasicDataController;
__decorate([
    (0, common_1.Put)('basic-data/:id'),
    (0, response_handler_decorator_1.ResponseHandler)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "update", null);
exports.BasicDataController = BasicDataController = __decorate([
    (0, common_1.Controller)('v1/process'),
    __metadata("design:paramtypes", [basic_data_service_1.BasicDataService])
], BasicDataController);
//# sourceMappingURL=basic-data.controller.js.map