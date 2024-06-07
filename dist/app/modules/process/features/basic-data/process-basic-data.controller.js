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
exports.ProcessBasicDataController = void 0;
const common_1 = require("@nestjs/common");
const process_basic_data_service_1 = require("./process-basic-data.service");
const process_schema_1 = require("../../process.schema");
let ProcessBasicDataController = class ProcessBasicDataController {
    constructor(processBasicDataService) {
        this.processBasicDataService = processBasicDataService;
    }
    async create(createProcessDto) {
        return this.processBasicDataService.createProcessBasicData(createProcessDto);
    }
    async getAll() {
        return this.processBasicDataService.getAllProcessBasicData();
    }
    async getById(id) {
        return this.processBasicDataService.getProcessBasicDataById(id);
    }
    async update(id, data) {
        return this.processBasicDataService.updateProcessBasicData(id, data);
    }
    async delete(id) {
        return this.processBasicDataService.deleteProcessBasicData(id);
    }
};
exports.ProcessBasicDataController = ProcessBasicDataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [process_schema_1.Process]),
    __metadata("design:returntype", Promise)
], ProcessBasicDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcessBasicDataController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessBasicDataController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProcessBasicDataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessBasicDataController.prototype, "delete", null);
exports.ProcessBasicDataController = ProcessBasicDataController = __decorate([
    (0, common_1.Controller)('process-basic-data'),
    __metadata("design:paramtypes", [process_basic_data_service_1.ProcessBasicDataService])
], ProcessBasicDataController);
//# sourceMappingURL=process-basic-data.controller.js.map