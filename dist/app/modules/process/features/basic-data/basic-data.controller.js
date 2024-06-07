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
const process_schema_1 = require("../../process.schema");
let BasicDataController = class BasicDataController {
    constructor(basicDataService) {
        this.basicDataService = basicDataService;
    }
    async create(createProcessDto) {
        return this.basicDataService.createProcessBasicData(createProcessDto);
    }
    async getAll() {
        return this.basicDataService.getAllProcessBasicData();
    }
    async getById(id) {
        return this.basicDataService.getProcessBasicDataById(id);
    }
    async update(id, data) {
        return this.basicDataService.updateProcessBasicData(id, data);
    }
    async delete(id) {
        return this.basicDataService.deleteProcessBasicData(id);
    }
};
exports.BasicDataController = BasicDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_schema_1.Process]),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasicDataController.prototype, "delete", null);
exports.BasicDataController = BasicDataController = __decorate([
    (0, common_1.Controller)('process-basic-data'),
    __metadata("design:paramtypes", [basic_data_service_1.BasicDataService])
], BasicDataController);
//# sourceMappingURL=basic-data.controller.js.map