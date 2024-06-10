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
exports.CreateProcessDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class IoInfoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IoInfoDto.prototype, "inputs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IoInfoDto.prototype, "outputs", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IoInfoDto.prototype, "business_outcome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IoInfoDto.prototype, "major_requirements", void 0);
class ControlAndMonitoringDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "workflows", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "kpis", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "reports", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "analytical_dashboards", void 0);
class DataManagementDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], DataManagementDto.prototype, "master_data_objects", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], DataManagementDto.prototype, "data_management_info", void 0);
class ComplianceScenariosDto {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenariosDto.prototype, "compliance_scenario_data", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenariosDto.prototype, "audit_trail_scenarios", void 0);
class CreateProcessDto {
}
exports.CreateProcessDto = CreateProcessDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "function_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "sub_function_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "version_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "version_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "sop_reference", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "owner_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "owner_role_designation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "release_status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "trigger", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "created_by", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CreateProcessDto.prototype, "created_on", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], CreateProcessDto.prototype, "last_modified_on", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateProcessDto.prototype, "is_deleted", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => IoInfoDto),
    __metadata("design:type", IoInfoDto)
], CreateProcessDto.prototype, "io_info", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "activities", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ControlAndMonitoringDto),
    __metadata("design:type", ControlAndMonitoringDto)
], CreateProcessDto.prototype, "control_and_monitoring", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "queries_and_responses", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DataManagementDto),
    __metadata("design:type", DataManagementDto)
], CreateProcessDto.prototype, "data_management", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], CreateProcessDto.prototype, "integration_scenario", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "documents", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "automation_scenarios", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ComplianceScenariosDto),
    __metadata("design:type", ComplianceScenariosDto)
], CreateProcessDto.prototype, "compliance_scenarios", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], CreateProcessDto.prototype, "controls", void 0);
//# sourceMappingURL=process.dto.js.map