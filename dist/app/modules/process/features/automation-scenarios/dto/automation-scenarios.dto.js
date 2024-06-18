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
exports.AutomationScenarioErrorPutDto = exports.DeleteAutomationScenarioResponseDto = exports.AutomationScenarioErrorResponseDto = exports.AutomationScenarioApiResponseDto = exports.UpsertAutomationScenarioDataDto = exports.AutomationScenarioDataDto = exports.UpsertAutomationScenarioDto = exports.AutomationScenarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AutomationScenarioDto {
    constructor() {
        this.is_deleted = false;
    }
}
exports.AutomationScenarioDto = AutomationScenarioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "technology", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "activity_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "mdo_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AutomationScenarioDto.prototype, "is_deleted", void 0);
class UpsertAutomationScenarioDto {
    constructor() {
        this.automation_scenario = [];
    }
}
exports.UpsertAutomationScenarioDto = UpsertAutomationScenarioDto;
class AutomationScenarioDataDto {
}
exports.AutomationScenarioDataDto = AutomationScenarioDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'Automated Testing',
        description: 'Type of automation scenario',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDataDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'Sample Automation Scenario',
        description: 'Title of the automation scenario',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDataDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'This scenario automates the testing of a new feature.',
        description: 'Description of the automation scenario',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDataDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: 'Selenium',
        description: 'Technology used in the automation scenario',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDataDto.prototype, "technology", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity1'],
        description: 'Array of activity IDs',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDataDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['mdo1'],
        description: 'Array of MDO IDs',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDataDto.prototype, "mdo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['integration1'],
        description: 'Array of integration scenario IDs',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDataDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'boolean',
        example: false,
        description: 'Flag indicating whether the scenario is deleted',
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AutomationScenarioDataDto.prototype, "is_deleted", void 0);
class UpsertAutomationScenarioDataDto {
}
exports.UpsertAutomationScenarioDataDto = UpsertAutomationScenarioDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        example: '6667e1246e91ff27e948a0e9',
        description: 'Identifier for the automation scenario',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpsertAutomationScenarioDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [AutomationScenarioDataDto],
        description: 'Array of automation scenarios',
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], UpsertAutomationScenarioDataDto.prototype, "automation_scenario", void 0);
class AutomationScenarioApiResponseDto {
}
exports.AutomationScenarioApiResponseDto = AutomationScenarioApiResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201, description: 'Status code' }),
    __metadata("design:type", Number)
], AutomationScenarioApiResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AutomationScenarioApiResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'AutomationScenario created successfully',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], AutomationScenarioApiResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [AutomationScenarioDataDto],
        properties: {
            created: {
                type: 'array',
                items: { $ref: '#/components/schemas/AutomationScenarioDto' },
            },
            updated: {
                type: 'array',
                items: { type: 'object' },
            },
        },
    }),
    __metadata("design:type", Object)
], AutomationScenarioApiResponseDto.prototype, "data", void 0);
class AutomationScenarioErrorResponseDto {
}
exports.AutomationScenarioErrorResponseDto = AutomationScenarioErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], AutomationScenarioErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], AutomationScenarioErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to create the automation process' }),
    __metadata("design:type", String)
], AutomationScenarioErrorResponseDto.prototype, "message", void 0);
class DeleteAutomationScenarioResponseDto {
}
exports.DeleteAutomationScenarioResponseDto = DeleteAutomationScenarioResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'Status code' }),
    __metadata("design:type", Number)
], DeleteAutomationScenarioResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], DeleteAutomationScenarioResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automation scenario deleted',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], DeleteAutomationScenarioResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            automation_scenario_id: {
                type: 'string',
                example: 'as_oh0ykw7az',
                description: 'Automation scenario id',
            },
        },
    }),
    __metadata("design:type", Object)
], DeleteAutomationScenarioResponseDto.prototype, "data", void 0);
class AutomationScenarioErrorPutDto {
}
exports.AutomationScenarioErrorPutDto = AutomationScenarioErrorPutDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'Status code' }),
    __metadata("design:type", Number)
], AutomationScenarioErrorPutDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AutomationScenarioErrorPutDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Failed to delete automation scenario',
        description: 'Error message',
    }),
    __metadata("design:type", String)
], AutomationScenarioErrorPutDto.prototype, "error", void 0);
//# sourceMappingURL=automation-scenarios.dto.js.map