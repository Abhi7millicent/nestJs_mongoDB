"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProcessDto = exports.ProcessControl = exports.ComplianceScenario = exports.AuditTrailScenarios = exports.ComplianceScenarioData = exports.AutomationScenario = exports.ProcessDocument = exports.IntegrationScenario = exports.DataManagementData = exports.DataManagement = exports.MDO = exports.QueriesAndResponses = exports.ProcessControlAndMonitoring = exports.AnalyticalDashboard = exports.Report = exports.Kpi = exports.Workflow = exports.Activity = exports.IoInfo = void 0;
class IoInfo {
}
exports.IoInfo = IoInfo;
class Activity {
}
exports.Activity = Activity;
class Workflow {
}
exports.Workflow = Workflow;
class Kpi {
}
exports.Kpi = Kpi;
class Report {
}
exports.Report = Report;
class AnalyticalDashboard {
}
exports.AnalyticalDashboard = AnalyticalDashboard;
class ProcessControlAndMonitoring {
    constructor() {
        this.workflows = [];
        this.kpis = [];
        this.reports = [];
        this.analytical_dashboards = [];
    }
}
exports.ProcessControlAndMonitoring = ProcessControlAndMonitoring;
class QueriesAndResponses {
}
exports.QueriesAndResponses = QueriesAndResponses;
class MDO {
}
exports.MDO = MDO;
class DataManagement {
}
exports.DataManagement = DataManagement;
class DataManagementData {
    constructor() {
        this.master_data_objects = [];
    }
}
exports.DataManagementData = DataManagementData;
class IntegrationScenario {
}
exports.IntegrationScenario = IntegrationScenario;
class ProcessDocument {
}
exports.ProcessDocument = ProcessDocument;
class AutomationScenario {
}
exports.AutomationScenario = AutomationScenario;
class ComplianceScenarioData {
}
exports.ComplianceScenarioData = ComplianceScenarioData;
class AuditTrailScenarios {
}
exports.AuditTrailScenarios = AuditTrailScenarios;
class ComplianceScenario {
    constructor() {
        this.compliance_scenario_data = [];
        this.audit_trail_scenarios = [];
    }
}
exports.ComplianceScenario = ComplianceScenario;
class ProcessControl {
}
exports.ProcessControl = ProcessControl;
class CreateProcessDto {
    constructor() {
        this.created_on = new Date();
        this.last_modified_by = '';
        this.last_modified_on = new Date();
        this.is_deleted = false;
        this.io_info = {
            inputs: '',
            outputs: '',
            business_outcome: '',
            major_requirements: '',
        };
        this.activities = [];
        this.control_and_monitoring = new ProcessControlAndMonitoring();
        this.queries_and_responses = [];
        this.data_management = {
            master_data_objects: [],
            data_management_info: {
                _id: '',
                average_transactions: '',
                maximum_transactions_month: '',
                maximum_transactions_day: '',
                average_line_items: '',
                data_security: '',
                data_retention: '',
                data_residency: '',
                activity_id: '',
            },
        };
        this.integration_scenario = {
            _id: '',
            title: '',
            description: '',
            data_provider: '',
            data_consumer: '',
            api_provider: '',
            calling_system: '',
            type: '',
            data_volume_year: '',
            mode: '',
            data_type: '',
            protocol: '',
            tool: '',
            data_record_size: '',
            yoy_data_growth: '',
            data_provider_authentication: '',
            data_consumer_authentication: '',
            activity_id: '',
            mdo_id: '',
        };
        this.documents = [];
        this.automation_scenarios = [];
        this.compliance_scenarios = new ComplianceScenario();
        this.controls = [];
    }
}
exports.CreateProcessDto = CreateProcessDto;
//# sourceMappingURL=process.dto.js.map