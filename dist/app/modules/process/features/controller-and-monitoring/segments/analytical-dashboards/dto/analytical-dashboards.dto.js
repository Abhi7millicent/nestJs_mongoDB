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
exports.AnalyticalDashboardDeleteErrorResponseDto = exports.AnalyticalDashboardDeleteResponseDto = exports.AnalyticalDashboardErrorResponseDto = exports.AnalyticalDashboardApiResponseDto = exports.AnalyticalDashboardDto = exports.UpsertAnalyticalDashboardsDto = exports.AnalyticalDashboardsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AnalyticalDashboardsDto {
}
exports.AnalyticalDashboardsDto = AnalyticalDashboardsDto;
class UpsertAnalyticalDashboardsDto {
    constructor() {
        this.analytical_dashboards = [];
    }
}
exports.UpsertAnalyticalDashboardsDto = UpsertAnalyticalDashboardsDto;
class AnalyticalDashboardDto {
}
exports.AnalyticalDashboardDto = AnalyticalDashboardDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'analytical Dashboard',
        description: 'Title of the analytical dashboard',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A comprehensive dashboard for sales analytics.',
        description: 'Description of the analytical dashboard',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
        description: 'Logic used for calculations in the dashboard',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['report.pdf'],
        description: 'Array of attachment filenames',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['High'],
        description: 'Array of complexity levels',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Analytical'],
        description: 'Array of dashboard types',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['PowerBI'],
        description: 'Array of dashboard applications',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "dashboard_application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['CRM'],
        description: 'Array of data sources',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "source_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Analyst'],
        description: 'Array of roles',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['test'],
        description: 'Array of applications',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity1'],
        description: 'Array of associated activity IDs',
    }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe',
        description: 'User who last modified the analytical dashboard',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Flag indicating whether the analytical dashboard is deleted or not',
    }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardDto.prototype, "is_deleted", void 0);
class AnalyticalDashboardApiResponseDto {
}
exports.AnalyticalDashboardApiResponseDto = AnalyticalDashboardApiResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201, description: 'Status code' }),
    __metadata("design:type", Number)
], AnalyticalDashboardApiResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardApiResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'AnalyticalDashboards created successfully',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardApiResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [AnalyticalDashboardDto],
        properties: {
            created: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/AnalyticalDashboardDto',
                },
            },
            updated: {
                type: 'array',
                items: { type: 'object' },
            },
        },
    }),
    __metadata("design:type", Object)
], AnalyticalDashboardApiResponseDto.prototype, "data", void 0);
class AnalyticalDashboardErrorResponseDto {
}
exports.AnalyticalDashboardErrorResponseDto = AnalyticalDashboardErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'Status code' }),
    __metadata("design:type", Number)
], AnalyticalDashboardErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Failed to delete analytical dashboard',
        description: 'Error message',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardErrorResponseDto.prototype, "error", void 0);
class AnalyticalDashboardDeleteResponseDto {
}
exports.AnalyticalDashboardDeleteResponseDto = AnalyticalDashboardDeleteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'Status code' }),
    __metadata("design:type", Number)
], AnalyticalDashboardDeleteResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardDeleteResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Analytical dashboard deleted',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDeleteResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ['object'],
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            analytical_dashboard_id: {
                type: 'string',
                example: 'ad_ruyuwn69e',
                description: 'Analytical dashboard id',
            },
        },
    }),
    __metadata("design:type", Object)
], AnalyticalDashboardDeleteResponseDto.prototype, "data", void 0);
class AnalyticalDashboardDeleteErrorResponseDto {
}
exports.AnalyticalDashboardDeleteErrorResponseDto = AnalyticalDashboardDeleteErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'Status code' }),
    __metadata("design:type", Number)
], AnalyticalDashboardDeleteErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Request success status' }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardDeleteErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Failed to delete analytical dashboard',
        description: 'Error message',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDeleteErrorResponseDto.prototype, "error", void 0);
//# sourceMappingURL=analytical-dashboards.dto.js.map