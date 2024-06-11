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
exports.ProcessSchema = exports.Process = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class IoInfo {
}
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], IoInfo.prototype, "inputs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], IoInfo.prototype, "outputs", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], IoInfo.prototype, "business_outcome", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], IoInfo.prototype, "major_requirements", void 0);
class Activity {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Activity.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Activity.prototype, "sr_no", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Activity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Activity.prototype, "performed_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Activity.prototype, "performed_by", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Activity.prototype, "performed_where", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Activity.prototype, "value_calculation_logic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Activity.prototype, "accounts_postings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Activity.prototype, "is_deleted", void 0);
class Workflow {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Workflow.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Workflow.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Workflow.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Workflow.prototype, "technology", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "levels", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "roles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Workflow.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Workflow.prototype, "is_deleted", void 0);
class Kpi {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Kpi.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Kpi.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Kpi.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Kpi.prototype, "calculation_logic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "complexity_level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Kpi.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Kpi.prototype, "is_deleted", void 0);
class Report {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Report.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Report.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Report.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "complexity_level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "application", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "source_data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Report.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Report.prototype, "is_deleted", void 0);
class AnalyticalDashboard {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AnalyticalDashboard.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AnalyticalDashboard.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AnalyticalDashboard.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "complexity_level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "dashboard_application", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "source_data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AnalyticalDashboard.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], AnalyticalDashboard.prototype, "is_deleted", void 0);
class ProcessControlAndMonitoring {
}
__decorate([
    (0, mongoose_1.Prop)({ type: [Workflow], default: [] }),
    __metadata("design:type", Array)
], ProcessControlAndMonitoring.prototype, "workflows", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Kpi], default: [] }),
    __metadata("design:type", Array)
], ProcessControlAndMonitoring.prototype, "kpis", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Report], default: [] }),
    __metadata("design:type", Array)
], ProcessControlAndMonitoring.prototype, "reports", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [AnalyticalDashboard], default: [] }),
    __metadata("design:type", Array)
], ProcessControlAndMonitoring.prototype, "analytical_dashboards", void 0);
class QueriesAndResponses {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], QueriesAndResponses.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QueriesAndResponses.prototype, "query", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], QueriesAndResponses.prototype, "response", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], QueriesAndResponses.prototype, "is_deleted", void 0);
class MDO {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], MDO.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MDO.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MDO.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", String)
], MDO.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], MDO.prototype, "is_deleted", void 0);
class DataManagement {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "average_transactions", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "maximum_transactions_month", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "maximum_transactions_day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "average_line_items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "data_security", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "data_retention", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], DataManagement.prototype, "data_residency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], DataManagement.prototype, "activity_id", void 0);
class DataManagementData {
}
__decorate([
    (0, mongoose_1.Prop)({ type: [MDO], default: [] }),
    __metadata("design:type", Array)
], DataManagementData.prototype, "master_data_objects", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DataManagement, required: true }),
    __metadata("design:type", DataManagement)
], DataManagementData.prototype, "data_management_info", void 0);
class IntegrationScenario {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "data_provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "data_consumer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "api_provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "calling_system", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "data_volume_year", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "mode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "data_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "protocol", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "tool", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "data_record_size", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "yoy_data_growth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "data_provider_authentication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], IntegrationScenario.prototype, "data_consumer_authentication", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], IntegrationScenario.prototype, "mdo_id", void 0);
class ProcessDocument {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ProcessDocument.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessDocument.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessDocument.prototype, "desc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessDocument.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessDocument.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessDocument.prototype, "number_range", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessDocument.prototype, "storage_requirements", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessDocument.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessDocument.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], ProcessDocument.prototype, "is_deleted", void 0);
class AutomationScenario {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AutomationScenario.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomationScenario.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomationScenario.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomationScenario.prototype, "desc", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AutomationScenario.prototype, "technology", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AutomationScenario.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AutomationScenario.prototype, "mdo_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AutomationScenario.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], AutomationScenario.prototype, "is_deleted", void 0);
class ComplianceScenarioData {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ComplianceScenarioData.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ComplianceScenarioData.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ComplianceScenarioData.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ComplianceScenarioData.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ComplianceScenarioData.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ComplianceScenarioData.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ComplianceScenarioData.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], ComplianceScenarioData.prototype, "is_deleted", void 0);
class AuditTrailScenarios {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AuditTrailScenarios.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AuditTrailScenarios.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], AuditTrailScenarios.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AuditTrailScenarios.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AuditTrailScenarios.prototype, "automation_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AuditTrailScenarios.prototype, "attachments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AuditTrailScenarios.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], AuditTrailScenarios.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], AuditTrailScenarios.prototype, "is_deleted", void 0);
class ComplianceScenario {
}
__decorate([
    (0, mongoose_1.Prop)({ type: [ComplianceScenarioData], default: [] }),
    __metadata("design:type", Array)
], ComplianceScenario.prototype, "compliance_scenario_data", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [AuditTrailScenarios], default: [] }),
    __metadata("design:type", Array)
], ComplianceScenario.prototype, "audit_trail_scenarios", void 0);
class ProcessControl {
}
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], ProcessControl.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessControl.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProcessControl.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessControl.prototype, "activity_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], ProcessControl.prototype, "mdo_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], ProcessControl.prototype, "is_deleted", void 0);
let Process = class Process extends mongoose_2.Document {
};
exports.Process = Process;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, auto: true }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Process.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Process.prototype, "function_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Process.prototype, "sub_function_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "version_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "version_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "sop_reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "owner_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "owner_role_designation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "release_status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "trigger", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Process.prototype, "created_by", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], Process.prototype, "created_on", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Process.prototype, "last_modified_by", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Process.prototype, "last_modified_on", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Process.prototype, "is_deleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: IoInfo, required: false }),
    __metadata("design:type", IoInfo)
], Process.prototype, "io_info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Activity], default: [] }),
    __metadata("design:type", Array)
], Process.prototype, "activities", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ProcessControlAndMonitoring, required: false }),
    __metadata("design:type", ProcessControlAndMonitoring)
], Process.prototype, "control_and_monitoring", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [QueriesAndResponses], default: [] }),
    __metadata("design:type", Array)
], Process.prototype, "queries_and_responses", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DataManagementData, required: false }),
    __metadata("design:type", DataManagementData)
], Process.prototype, "data_management", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: IntegrationScenario, required: false }),
    __metadata("design:type", IntegrationScenario)
], Process.prototype, "integration_scenario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [ProcessDocument], default: [] }),
    __metadata("design:type", Array)
], Process.prototype, "documents", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [AutomationScenario], default: [] }),
    __metadata("design:type", Array)
], Process.prototype, "automation_scenarios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ComplianceScenario, required: false }),
    __metadata("design:type", ComplianceScenario)
], Process.prototype, "compliance_scenarios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [ProcessControl], default: [] }),
    __metadata("design:type", Array)
], Process.prototype, "controls", void 0);
exports.Process = Process = __decorate([
    (0, mongoose_1.Schema)({ collection: 'process_basic_data3' })
], Process);
exports.ProcessSchema = mongoose_1.SchemaFactory.createForClass(Process);
//# sourceMappingURL=process.schema.js.map