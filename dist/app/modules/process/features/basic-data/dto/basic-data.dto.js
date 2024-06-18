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
exports.DeleteProcessErrorDto = exports.UpdatedDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class IoInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "inputs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "outputs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "business_outcome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "major_requirements", void 0);
class ActivityDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'activity_m5eo8w181' }),
    __metadata("design:type", String)
], ActivityDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ActivityDto.prototype, "sr_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ActivityDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ActivityDto.prototype, "performed_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ActivityDto.prototype, "performed_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], ActivityDto.prototype, "performed_where", void 0);
class WorkflowDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'wf_9r1xmc7uk' }),
    __metadata("design:type", String)
], WorkflowDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11' }),
    __metadata("design:type", String)
], WorkflowDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['beginner'] }),
    __metadata("design:type", Array)
], WorkflowDto.prototype, "levels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['beginner'] }),
    __metadata("design:type", Array)
], WorkflowDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['beginner'] }),
    __metadata("design:type", Array)
], WorkflowDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['beginner'] }),
    __metadata("design:type", Array)
], WorkflowDto.prototype, "automation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['beginner'] }),
    __metadata("design:type", Array)
], WorkflowDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], WorkflowDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], WorkflowDto.prototype, "technology", void 0);
class KpiDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Monthly Sales Growth' }),
    __metadata("design:type", String)
], KpiDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Measures the monthly growth in sales revenue.' }),
    __metadata("design:type", String)
], KpiDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
    }),
    __metadata("design:type", String)
], KpiDto.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Medium'] }),
    __metadata("design:type", Array)
], KpiDto.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Sales Manager', 'Analyst'] }),
    __metadata("design:type", Array)
], KpiDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['activity1', 'activity2'] }),
    __metadata("design:type", Array)
], KpiDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['test'] }),
    __metadata("design:type", Array)
], KpiDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    __metadata("design:type", String)
], KpiDto.prototype, "bench_mark", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kpis_3l251ajxa' }),
    __metadata("design:type", String)
], KpiDto.prototype, "_id", void 0);
class ReportDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Report Financial Report' }),
    __metadata("design:type", String)
], ReportDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A detailed report of the financial performance for the quarter.',
    }),
    __metadata("design:type", String)
], ReportDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['financial-summary.pdf', 'charts.xlsx'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['High'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
    }),
    __metadata("design:type", String)
], ReportDto.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Financial', 'Performance'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Excel', 'PowerBI'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['ERP', 'Accounting System'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "source_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Financial Analyst', 'CFO'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['activity1', 'activity2'] }),
    __metadata("design:type", Array)
], ReportDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'report_li2jrnnin' }),
    __metadata("design:type", String)
], ReportDto.prototype, "_id", void 0);
class AnalyticalDashboardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'analytical Dashboard' }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'A comprehensive dashboard for sales analytics.',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
    }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['report.pdf', 'chart.png'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['High'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Analytical', 'Strategic'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['PowerBI', 'Tableau'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "dashboard_application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['CRM', 'ERP'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "source_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Analyst', 'Manager'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['test', 'test2'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "application", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['activity1', 'activity2'] }),
    __metadata("design:type", Array)
], AnalyticalDashboardDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], AnalyticalDashboardDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ad_r5vnypwae' }),
    __metadata("design:type", String)
], AnalyticalDashboardDto.prototype, "_id", void 0);
class ControlAndMonitoringDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WorkflowDto] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "workflows", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [KpiDto] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "kpis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReportDto] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "reports", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AnalyticalDashboardDto] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "analytical_dashboards", void 0);
class QueryResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'What is NestJS?' }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'NestJS is a progressive Node.js framework.',
    }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "response", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'qr_eas75e3zu' }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "_id", void 0);
class DataManagementDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1234567890abcdef' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Data Management Example'] }),
    __metadata("design:type", Array)
], DataManagementDto.prototype, "mdo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            average_transactions_year: { type: 'string', example: '12000' },
            maximum_transactions_month: { type: 'string', example: '1500' },
            maximum_transactions_day: { type: 'string', example: '50' },
            average_line_items: { type: 'string', example: '10' },
        },
    }),
    __metadata("design:type", Object)
], DataManagementDto.prototype, "transaction_volumes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'High' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_security", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5 years' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_retention", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'USA' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_residency", void 0);
class DocumentDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sample Document Title' }),
    __metadata("design:type", String)
], DocumentDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is a sample description of the document.',
    }),
    __metadata("design:type", String)
], DocumentDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['type1', 'type2'] }),
    __metadata("design:type", Array)
], DocumentDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['source1', 'source2'] }),
    __metadata("design:type", Array)
], DocumentDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100-200' }),
    __metadata("design:type", String)
], DocumentDto.prototype, "number_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Store in a cool, dry place' }),
    __metadata("design:type", String)
], DocumentDto.prototype, "storage_requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['attachment1', 'attachment2'] }),
    __metadata("design:type", Array)
], DocumentDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['activity1', 'activity2'] }),
    __metadata("design:type", Array)
], DocumentDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], DocumentDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pd_kuclxi9j6' }),
    __metadata("design:type", String)
], DocumentDto.prototype, "_id", void 0);
class ComplianceScenarioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'GDPR Compliance 1' }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Scenario for reviewing and ensuring compliance with GDPR regulations.',
    }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['file1.pdf', 'file2.docx', 'file3.xlsx'] }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['activity123', 'activity456', 'activity789'] }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['automation123', 'automation456'] }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "automation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['integration123', 'integration456', 'integration789'],
    }),
    __metadata("design:type", Array)
], ComplianceScenarioDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ComplianceScenarioDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'cs_6fqzgve8u' }),
    __metadata("design:type", String)
], ComplianceScenarioDto.prototype, "_id", void 0);
class ControlsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data Quality 1' }),
    __metadata("design:type", String)
], ControlsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ensure the quality and consistency of incoming data.',
    }),
    __metadata("design:type", String)
], ControlsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Act1'] }),
    __metadata("design:type", Array)
], ControlsDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['mdo456'] }),
    __metadata("design:type", Array)
], ControlsDto.prototype, "mdo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pc_64gl1z60x' }),
    __metadata("design:type", String)
], ControlsDto.prototype, "_id", void 0);
class UpdatedDataDto {
}
exports.UpdatedDataDto = UpdatedDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Audit' }),
    __metadata("design:type", String)
], UpdatedDataDto.prototype, "process_area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: IoInfoDto }),
    __metadata("design:type", IoInfoDto)
], UpdatedDataDto.prototype, "io_info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ActivityDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "activity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ControlAndMonitoringDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "control_and_monitoring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [QueryResponseDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "query_response", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [DataManagementDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "data_management", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [DocumentDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "document", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ComplianceScenarioDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "compliance_scenario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ControlsDto] }),
    __metadata("design:type", Array)
], UpdatedDataDto.prototype, "controls", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UpdatedDataDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Updated Data' }),
    __metadata("design:type", String)
], UpdatedDataDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345' }),
    __metadata("design:type", String)
], UpdatedDataDto.prototype, "_id", void 0);
class DeleteProcessErrorDto {
}
exports.DeleteProcessErrorDto = DeleteProcessErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], DeleteProcessErrorDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], DeleteProcessErrorDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to delete basic process' }),
    __metadata("design:type", String)
], DeleteProcessErrorDto.prototype, "error", void 0);
//# sourceMappingURL=basic-data.dto.js.map