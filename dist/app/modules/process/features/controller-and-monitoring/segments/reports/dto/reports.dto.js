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
exports.FailedReportDeletionResponse = exports.DeletedReportResponse = exports.FailedReportResponse = exports.CreatedReportResponse = exports.ReportData = exports.UpsertReportsDto = exports.ReportsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReportsDto {
}
exports.ReportsDto = ReportsDto;
class UpsertReportsDto {
    constructor() {
        this.reports = [];
    }
}
exports.UpsertReportsDto = UpsertReportsDto;
class ReportData {
}
exports.ReportData = ReportData;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Report Financial Report',
        description: 'Title of the report',
    }),
    __metadata("design:type", String)
], ReportData.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'A detailed report of the financial performance for the quarter.',
        description: 'Description of the report',
    }),
    __metadata("design:type", String)
], ReportData.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['financial-summary.pdf'],
        description: 'Array of attachment filenames',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['High'],
        description: 'Array of complexity levels',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
        description: 'Calculation logic used in the report',
    }),
    __metadata("design:type", String)
], ReportData.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Financial'],
        description: 'Array of report types',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Excel'],
        description: 'Array of applications used',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['ERP'],
        description: 'Array of source data systems',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "source_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Financial Analyst'],
        description: 'Array of roles associated with the report',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity1'],
        description: 'Array of associated activity IDs',
    }),
    __metadata("design:type", Array)
], ReportData.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'alex.smith',
        description: 'User who last modified the report',
    }),
    __metadata("design:type", String)
], ReportData.prototype, "last_modified_by", void 0);
class CreatedReportResponse {
}
exports.CreatedReportResponse = CreatedReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 201 }),
    __metadata("design:type", Number)
], CreatedReportResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], CreatedReportResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'reports created successfully' }),
    __metadata("design:type", String)
], CreatedReportResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ReportData],
        description: 'Data object containing created report(s)',
    }),
    __metadata("design:type", Object)
], CreatedReportResponse.prototype, "data", void 0);
class FailedReportResponse {
}
exports.FailedReportResponse = FailedReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 500 }),
    __metadata("design:type", Number)
], FailedReportResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], FailedReportResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Failed to delete report' }),
    __metadata("design:type", String)
], FailedReportResponse.prototype, "error", void 0);
class DeletedReportResponse {
}
exports.DeletedReportResponse = DeletedReportResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 200 }),
    __metadata("design:type", Number)
], DeletedReportResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: true }),
    __metadata("design:type", Boolean)
], DeletedReportResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Report deleted' }),
    __metadata("design:type", String)
], DeletedReportResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Object,
        description: 'Data object containing IDs of deleted report and process',
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            report_id: {
                type: 'string',
                example: 'report_ruyuwn69e',
                description: 'Report id',
            },
        },
    }),
    __metadata("design:type", Object)
], DeletedReportResponse.prototype, "data", void 0);
class FailedReportDeletionResponse {
}
exports.FailedReportDeletionResponse = FailedReportDeletionResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, example: 500 }),
    __metadata("design:type", Number)
], FailedReportDeletionResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean, example: false }),
    __metadata("design:type", Boolean)
], FailedReportDeletionResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, example: 'Failed to delete report' }),
    __metadata("design:type", String)
], FailedReportDeletionResponse.prototype, "error", void 0);
//# sourceMappingURL=reports.dto.js.map