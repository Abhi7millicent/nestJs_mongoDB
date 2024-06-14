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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManagementDto = exports.TransactionVolumesDataDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class TransactionVolumesDataDto {
}
exports.TransactionVolumesDataDto = TransactionVolumesDataDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "average_transactions_year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "maximum_transactions_month", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "maximum_transactions_day", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "average_line_items", void 0);
class DataManagementDto {
}
exports.DataManagementDto = DataManagementDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataManagementDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], DataManagementDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TransactionVolumesDataDto),
    __metadata("design:type", TransactionVolumesDataDto)
], DataManagementDto.prototype, "transaction_volumes", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_security", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_retention", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_residency", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DataManagementDto.prototype, "last_modified_by", void 0);
//# sourceMappingURL=data-management.dto.js.map