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
exports.IntegrationProcessResponseDTO = exports.UpdateIntegrationScenarioDataDto = exports.UpdateIntegrationScenarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateIntegrationScenarioDto {
}
exports.UpdateIntegrationScenarioDto = UpdateIntegrationScenarioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "data_provider", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "data_consumer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "api_provider", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "calling_system", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "data_volume_year", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "mode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "data_type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "protocol", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "tool", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "data_record_size", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "yoy_data_growth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "data_provider_authentication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "data_consumer_authentication", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "activity_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDto.prototype, "mdo_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDto.prototype, "last_modified_by", void 0);
class UpdateIntegrationScenarioDataDto {
}
exports.UpdateIntegrationScenarioDataDto = UpdateIntegrationScenarioDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '666d417093b9df8f829b22a3' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Integration Scenario Title' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Description of the integration scenario.',
    }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Provider1', 'Provider2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "data_provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Consumer1', 'Consumer2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "data_consumer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['APIProvider1', 'APIProvider2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "api_provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['System1', 'System2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "calling_system", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Type1', 'Type2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['1000GB', '2000GB'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "data_volume_year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Mode1', 'Mode2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "mode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['DataType1', 'DataType2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "data_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Protocol1', 'Protocol2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "protocol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Tool1', 'Tool2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "tool", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '10MB' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "data_record_size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: '5%' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "yoy_data_growth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'OAuth2' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "data_provider_authentication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'BasicAuth' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "data_consumer_authentication", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['Activity1', 'Activity2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String], example: ['MDO1', 'MDO2'] }),
    __metadata("design:type", Array)
], UpdateIntegrationScenarioDataDto.prototype, "mdo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'user123' }),
    __metadata("design:type", String)
], UpdateIntegrationScenarioDataDto.prototype, "last_modified_by", void 0);
class IntegrationProcessResponseDTO {
}
exports.IntegrationProcessResponseDTO = IntegrationProcessResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "function_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "sub_function_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "version_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "version_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "sop_reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "owner_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "owner_role_designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "release_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "trigger", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "created_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], IntegrationProcessResponseDTO.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], IntegrationProcessResponseDTO.prototype, "io_info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], IntegrationProcessResponseDTO.prototype, "control_and_monitoring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "queries_and_responses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], IntegrationProcessResponseDTO.prototype, "data_management", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], IntegrationProcessResponseDTO.prototype, "integration_scenario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "documents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "automation_scenarios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], IntegrationProcessResponseDTO.prototype, "compliance_scenarios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], IntegrationProcessResponseDTO.prototype, "controls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "created_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], IntegrationProcessResponseDTO.prototype, "__v", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], IntegrationProcessResponseDTO.prototype, "last_modified_on", void 0);
//# sourceMappingURL=integration-scenarios.dto.js.map