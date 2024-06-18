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
exports.DeleteAuditTrailErrorResponseDto = exports.CreateAuditTrailErrorResponseDto = exports.DeleteAuditTrailResponseDto = exports.ApiResponseDto = exports.AuditTrailDto = exports.UpsertAuditTrailScenariosDto = exports.AuditTrailScenariosDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AuditTrailScenariosDto {
}
exports.AuditTrailScenariosDto = AuditTrailScenariosDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuditTrailScenariosDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuditTrailScenariosDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuditTrailScenariosDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AuditTrailScenariosDto.prototype, "activity_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AuditTrailScenariosDto.prototype, "automation_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AuditTrailScenariosDto.prototype, "attachments", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AuditTrailScenariosDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AuditTrailScenariosDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AuditTrailScenariosDto.prototype, "is_deleted", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuditTrailScenariosDto.prototype, "last_modified_by", void 0);
class UpsertAuditTrailScenariosDto {
    constructor() {
        this.audit_trail_scenarios = [];
    }
}
exports.UpsertAuditTrailScenariosDto = UpsertAuditTrailScenariosDto;
class AuditTrailDto {
}
exports.AuditTrailDto = AuditTrailDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'System Audit Trail 1',
        description: 'System Audit Trail 1',
    }),
    __metadata("design:type", String)
], AuditTrailDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Scenario for tracking changes and activities in the system for audit purposes.',
        description: 'Description of the scenario',
    }),
    __metadata("design:type", String)
], AuditTrailDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity101'],
        description: 'Array of activities',
    }),
    __metadata("design:type", Array)
], AuditTrailDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['automation101'],
        description: 'Array of automation ids',
    }),
    __metadata("design:type", Array)
], AuditTrailDto.prototype, "automation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['log1.txt'],
        description: 'Array of attachments',
    }),
    __metadata("design:type", Array)
], AuditTrailDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['integration101'],
        description: 'Array of integration scenario ids',
    }),
    __metadata("design:type", Array)
], AuditTrailDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['admin'],
        description: 'Array of roles',
    }),
    __metadata("design:type", Array)
], AuditTrailDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin1',
        description: 'User who last modified the activity',
    }),
    __metadata("design:type", String)
], AuditTrailDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Flag indicating whether the activity is deleted or not',
    }),
    __metadata("design:type", Boolean)
], AuditTrailDto.prototype, "is_deleted", void 0);
class ApiResponseDto {
}
exports.ApiResponseDto = ApiResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201, description: 'Status code' }),
    __metadata("design:type", Number)
], ApiResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], ApiResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'AuditTrailScenarios created successfully',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], ApiResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AuditTrailDto] }),
    __metadata("design:type", Object)
], ApiResponseDto.prototype, "data", void 0);
class DeleteAuditTrailResponseDto {
}
exports.DeleteAuditTrailResponseDto = DeleteAuditTrailResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], DeleteAuditTrailResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DeleteAuditTrailResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Audit trail deleted' }),
    __metadata("design:type", String)
], DeleteAuditTrailResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            audit_trail_id: {
                type: 'string',
                example: 'at_ruyuwn69e',
                description: 'Audit trail id',
            },
        },
    }),
    __metadata("design:type", Object)
], DeleteAuditTrailResponseDto.prototype, "data", void 0);
class CreateAuditTrailErrorResponseDto {
}
exports.CreateAuditTrailErrorResponseDto = CreateAuditTrailErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], CreateAuditTrailErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], CreateAuditTrailErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to create audit trail' }),
    __metadata("design:type", String)
], CreateAuditTrailErrorResponseDto.prototype, "error", void 0);
class DeleteAuditTrailErrorResponseDto {
}
exports.DeleteAuditTrailErrorResponseDto = DeleteAuditTrailErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], DeleteAuditTrailErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], DeleteAuditTrailErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to delete audit trail' }),
    __metadata("design:type", String)
], DeleteAuditTrailErrorResponseDto.prototype, "error", void 0);
//# sourceMappingURL=audit-trail.dto.js.map