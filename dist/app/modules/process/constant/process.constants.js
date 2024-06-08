"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_controls = exports.process_controls_id = exports.process_document = exports.process_document_id = exports.queries_and_responses = exports.queries_and_responses_id = exports.workflow = exports.controlAndMonitoring = exports.controlAndMonitoringData = exports.PROCESS = void 0;
exports.PROCESS = {
    activities: "activities",
    control_and_monitoring: {
        workflows: "workflows",
        kpis: "kpis",
        reports: "reports",
        analytical_dashboards: "analytical_dashboards"
    },
    queries_and_responses: "queries_and_responses",
    data_management: {
        master_data_objects: "master_data_objects",
        data_management_info: "data_management_info"
    },
    integration_scenario: "integration_scenario",
    documents: "documents",
    automation_scenarios: "automation_scenarios",
    compliance_scenarios: {
        compliance_scenario_data: "compliance_scenario_data",
        audit_trail_scenarios: "audit_trail_scenarios"
    },
    controls: "controls"
};
var controlAndMonitoringData;
(function (controlAndMonitoringData) {
    controlAndMonitoringData["I"] = "workflows";
    controlAndMonitoringData["II"] = "kpis";
    controlAndMonitoringData["III"] = "reports";
    controlAndMonitoringData["IV"] = "analytical_dashboards";
})(controlAndMonitoringData || (exports.controlAndMonitoringData = controlAndMonitoringData = {}));
exports.controlAndMonitoring = {
    [controlAndMonitoringData.I]: "workflows",
    [controlAndMonitoringData.II]: "kpis",
    [controlAndMonitoringData.III]: "reports",
    [controlAndMonitoringData.IV]: "analytical_dashboards",
};
exports.workflow = "wf_";
exports.queries_and_responses_id = "qr_";
exports.queries_and_responses = "queries_and_responses";
exports.process_document_id = "pd_";
exports.process_document = "documents";
exports.process_controls_id = "pc_";
exports.process_controls = "documents";
//# sourceMappingURL=process.constants.js.map