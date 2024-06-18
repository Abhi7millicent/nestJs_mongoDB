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
exports.ComplianceScenarioDeleteResponseDto = exports.DeleteComplianceScenarioResponseDto = exports.ComplianceScenarioErrorResponseDto = exports.ComplianceScenarioApiResponseDto = exports.ComplianceScenarioDto = exports.UpsertComplianceScenarioDataDto = exports.ComplianceScenarioDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ComplianceScenarioDataDto {
}
exports.ComplianceScenarioDataDto = ComplianceScenarioDataDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComplianceScenarioDataDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComplianceScenarioDataDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComplianceScenarioDataDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenarioDataDto.prototype, "attachments", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenarioDataDto.prototype, "activity_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenarioDataDto.prototype, "automation_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], ComplianceScenarioDataDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ComplianceScenarioDataDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ComplianceScenarioDataDto.prototype, "is_deleted", void 0);
class UpsertComplianceScenarioDataDto {
    constructor() {
        this.compliance_scenario = [];
    }
}
exports.UpsertComplianceScenarioDataDto = UpsertComplianceScenarioDataDto;
class ComplianceScenarioDto {
}
exports.ComplianceScenarioDto = ComplianceScenarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'GDPR Compliance 1',
        description: 'GDPR Compliance 1',
    }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
        description: 'Description of the scenario',
    }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['file1.pdf'],
        description: 'Array of attachments',
    }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity123'],
        description: 'Array of activities',
    }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['automation123'],
        description: 'Array of automation ids',
    }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "automation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['integration123'],
        description: 'Array of integration scenario ids',
    }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user456',
        description: 'User who last modified the activity',
    }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Flag indicating whether the activity is deleted or not',
    }),
    __metadata("design:type", Boolean)
], ComplianceScenarioDto.prototype, "is_deleted", void 0);
class ComplianceScenarioApiResponseDto {
}
exports.ComplianceScenarioApiResponseDto = ComplianceScenarioApiResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201, description: 'Status code' }),
    __metadata("design:type", Number)
], ComplianceScenarioApiResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], ComplianceScenarioApiResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ComplianceScenario created successfully',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], ComplianceScenarioApiResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ComplianceScenarioDto] }),
    __metadata("design:type", Object)
], ComplianceScenarioApiResponseDto.prototype, "data", void 0);
class ComplianceScenarioErrorResponseDto {
}
exports.ComplianceScenarioErrorResponseDto = ComplianceScenarioErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], ComplianceScenarioErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ComplianceScenarioErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to create compliance scenario' }),
    __metadata("design:type", String)
], ComplianceScenarioErrorResponseDto.prototype, "error", void 0);
class DeleteComplianceScenarioResponseDto {
}
exports.DeleteComplianceScenarioResponseDto = DeleteComplianceScenarioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'Status code' }),
    __metadata("design:type", Number)
], DeleteComplianceScenarioResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], DeleteComplianceScenarioResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Compliance scenario deleted',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], DeleteComplianceScenarioResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            compliance_scenario_id: {
                type: 'string',
                example: 'cs_ruyuwn69e',
                description: 'Compliance scenario id',
            },
        },
    }),
    __metadata("design:type", Object)
], DeleteComplianceScenarioResponseDto.prototype, "data", void 0);
class ComplianceScenarioDeleteResponseDto {
}
exports.ComplianceScenarioDeleteResponseDto = ComplianceScenarioDeleteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], ComplianceScenarioDeleteResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ComplianceScenarioDeleteResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to delete compliance scenario' }),
    __metadata("design:type", String)
], ComplianceScenarioDeleteResponseDto.prototype, "error", void 0);
//# sourceMappingURL=compliance-scenarios-data.dto.js.map