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
exports.ErrorResponsePutDto = exports.ActivityDeletedResponseDto = exports.ErrorResponseDto = exports.CreateActivityResponseDto = exports.CreateActivityDto = exports.ActivityDataDto = exports.UpsertActivityDto = exports.ActivityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ActivityDto {
}
exports.ActivityDto = ActivityDto;
class UpsertActivityDto {
    constructor() {
        this.activity = [];
    }
}
exports.UpsertActivityDto = UpsertActivityDto;
class ActivityDataDto {
}
exports.ActivityDataDto = ActivityDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifier for the activity',
        example: '6667e1246e91ff27e948a0e9',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Serial number for the activity',
        example: '002',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "sr_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the activity',
        example: 'Initial activity description',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of timestamps when the activity was performed',
        example: ['2024-06-01T12:00:00Z'],
        type: [String],
        format: 'date-time',
    }),
    __metadata("design:type", Array)
], ActivityDataDto.prototype, "performed_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of users who performed the activity',
        example: ['user1'],
        type: [String],
    }),
    __metadata("design:type", Array)
], ActivityDataDto.prototype, "performed_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of locations where the activity was performed',
        example: ['location1'],
        type: [String],
    }),
    __metadata("design:type", Array)
], ActivityDataDto.prototype, "performed_where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Logic used for value calculation',
        example: 'logic1',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "value_calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Details of accounting postings',
        example: 'accounting details 1',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "accounts_postings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User who last modified the activity',
        example: 'admin1',
    }),
    __metadata("design:type", String)
], ActivityDataDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag indicating whether the activity is deleted or not',
        example: false,
    }),
    __metadata("design:type", Boolean)
], ActivityDataDto.prototype, "is_deleted", void 0);
class CreateActivityDto {
}
exports.CreateActivityDto = CreateActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifier for the activity',
        example: '6667e1246e91ff27e948a0e9',
    }),
    __metadata("design:type", String)
], CreateActivityDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ActivityDataDto],
        description: 'Array of activities',
    }),
    __metadata("design:type", Array)
], CreateActivityDto.prototype, "activity", void 0);
class CreateActivityResponseDto {
}
exports.CreateActivityResponseDto = CreateActivityResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 201 }),
    __metadata("design:type", Number)
], CreateActivityResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag', example: true }),
    __metadata("design:type", Boolean)
], CreateActivityResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        example: 'Activity created successfully',
    }),
    __metadata("design:type", String)
], CreateActivityResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Created activity data',
        type: [ActivityDataDto],
    }),
    __metadata("design:type", Object)
], CreateActivityResponseDto.prototype, "data", void 0);
class ErrorResponseDto {
}
exports.ErrorResponseDto = ErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 500 }),
    __metadata("design:type", Number)
], ErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag', example: false }),
    __metadata("design:type", Boolean)
], ErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Error message',
        example: 'Failed to create the activity',
    }),
    __metadata("design:type", String)
], ErrorResponseDto.prototype, "message", void 0);
class ActivityDeletedDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Process id',
        example: '6667e1246e91ff27e948a0e9',
    }),
    __metadata("design:type", String)
], ActivityDeletedDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Activity id',
        example: 'activity_h8poikl68',
    }),
    __metadata("design:type", String)
], ActivityDeletedDataDto.prototype, "activity_id", void 0);
class ActivityDeletedResponseDto {
}
exports.ActivityDeletedResponseDto = ActivityDeletedResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'HTTP status code',
        example: 200,
    }),
    __metadata("design:type", Number)
], ActivityDeletedResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success flag',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ActivityDeletedResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        example: 'Activity deleted',
    }),
    __metadata("design:type", String)
], ActivityDeletedResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Deleted activity data',
        type: ActivityDeletedDataDto,
    }),
    __metadata("design:type", ActivityDeletedDataDto)
], ActivityDeletedResponseDto.prototype, "data", void 0);
class ErrorResponsePutDto {
}
exports.ErrorResponsePutDto = ErrorResponsePutDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 500 }),
    __metadata("design:type", Number)
], ErrorResponsePutDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success flag', example: false }),
    __metadata("design:type", Boolean)
], ErrorResponsePutDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Error message',
        example: 'Failed to delete the activity',
    }),
    __metadata("design:type", String)
], ErrorResponsePutDto.prototype, "message", void 0);
//# sourceMappingURL=activities.dto.js.map