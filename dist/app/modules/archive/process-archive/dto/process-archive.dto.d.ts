export declare class IoInfo {
    inputs: string;
    outputs: string;
    business_outcome: string;
    major_requirements: string;
}
declare class Transaction_volumes_data {
    average_transactions_year: string;
    maximum_transactions_month: string;
    maximum_transactions_day: string;
    average_line_items: string;
}
export declare class Activity {
    _id: string;
    sr_no: string;
    description: string;
    performed_at: string[];
    performed_by: string[];
    performed_where: string[];
    value_calculation_logic: string;
    accounts_postings: string;
    is_deleted: boolean;
}
export declare class Workflow {
    _id: string;
    title: string;
    description: string;
    technology: string;
    levels: string[];
    roles: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class Kpi {
    _id: string;
    title: string;
    description: string;
    calculation_logic: string;
    complexity_level: string[];
    role: string[];
    activity_id: string[];
    value: string[];
    bench_mark: string;
    is_deleted: boolean;
}
export declare class Report {
    _id: string;
    title: string;
    description: string;
    calculation_logic: string;
    attachments: string[];
    complexity_level: string[];
    type: string[];
    application: string[];
    source_data: string[];
    role: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class AnalyticalDashboard {
    _id: string;
    title: string;
    description: string;
    calculation_logic: string;
    attachments: string[];
    application: string[];
    complexity_level: string[];
    type: string[];
    dashboard_application: string[];
    source_data: string[];
    role: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class ProcessControlAndMonitoring {
    workflows: Workflow[];
    kpis: Kpi[];
    reports: Report[];
    analytical_dashboards: AnalyticalDashboard[];
}
export declare class QueriesAndResponses {
    _id: string;
    query: string;
    response: string;
    is_deleted: boolean;
}
export declare class DataManagementData {
    _id: string;
    title: string[];
    transaction_volumes: Transaction_volumes_data;
    data_security: string;
    data_retention: string;
    data_residency: string;
}
export declare class IntegrationScenario {
    _id: string;
    title: string;
    description: string;
    data_provider: string[];
    data_consumer: string[];
    api_provider: string[];
    calling_system: string[];
    type: string[];
    data_volume_year: string[];
    mode: string[];
    data_type: string[];
    protocol: string[];
    tool: string[];
    data_record_size: string;
    yoy_data_growth: string;
    data_provider_authentication: string;
    data_consumer_authentication: string;
    activity_id: string[];
    mdo_id: string[];
}
export declare class ProcessDocument {
    _id: string;
    title: string;
    desc: string;
    type: string[];
    source: string[];
    number_range: string;
    storage_requirements: string;
    attachments: string[];
    activity_id: string[];
    is_deleted: boolean;
}
export declare class AutomationScenario {
    _id: string;
    type: string;
    title: string;
    desc: string;
    technology: string;
    activity_id: string[];
    mdo_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class ComplianceScenarioData {
    _id: string;
    title: string;
    description: string;
    attachments: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class AuditTrailScenarios {
    _id: string;
    title: string;
    description: string;
    activity_id: string[];
    automation_id: string[];
    attachments: string[];
    integration_scenario_id: string[];
    role: string[];
    is_deleted: boolean;
}
export declare class ComplianceScenario {
    compliance_scenario_data: ComplianceScenarioData[];
    audit_trail_scenarios: AuditTrailScenarios[];
}
export declare class ProcessControl {
    _id: string;
    title: string;
    description: string;
    activity_id: string[];
    mdo_id: string[];
    is_deleted: boolean;
}
declare class ProcessDto {
    _id: string;
    function_id: string[];
    sub_function_id: string[];
    title: string;
    version_type: string;
    version_id: string;
    sop_reference: string;
    owner_name: string;
    owner_role_designation: string;
    release_status: string;
    description: string;
    trigger: string;
    created_by: string;
    created_on: Date;
    last_modified_by: string;
    last_modified_on: Date;
    is_deleted: boolean;
    io_info: IoInfo;
    activities: Activity[];
    control_and_monitoring: ProcessControlAndMonitoring;
    queries_and_responses: QueriesAndResponses[];
    data_management: DataManagementData;
    integration_scenario: IntegrationScenario;
    documents: ProcessDocument[];
    automation_scenarios: AutomationScenario[];
    compliance_scenarios: ComplianceScenario;
    controls: ProcessControl[];
}
export declare class CreateProcessArchiveDto {
    process: ProcessDto;
    deleted_at: Date;
}
export {};
