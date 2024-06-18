declare class IoInfoDto {
    inputs: string;
    outputs: string;
    business_outcome: string;
    major_requirements: string;
}
declare class ActivityDto {
    _id: string;
    sr_no: number;
    description: string;
    performed_at: string;
    performed_by: string;
    performed_where: string;
}
declare class WorkflowDto {
    _id: string;
    title: string;
    levels: string[];
    roles: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    description: string;
    technology: string;
}
declare class KpiDto {
    title: string;
    description: string;
    calculation_logic: string;
    complexity_level: string[];
    role: string[];
    activity_id: string[];
    value: string[];
    bench_mark: string;
    _id: string;
}
declare class ReportDto {
    title: string;
    description: string;
    attachments: string[];
    complexity_level: string[];
    calculation_logic: string;
    type: string[];
    application: string[];
    source_data: string[];
    role: string[];
    activity_id: string[];
    _id: string;
}
declare class AnalyticalDashboardDto {
    title: string;
    description: string;
    calculation_logic: string;
    attachments: string[];
    complexity_level: string[];
    type: string[];
    dashboard_application: string[];
    source_data: string[];
    role: string[];
    application: string[];
    activity_id: string[];
    is_deleted: boolean;
    _id: string;
}
declare class ControlAndMonitoringDto {
    workflows: WorkflowDto[];
    kpis: KpiDto[];
    reports: ReportDto[];
    analytical_dashboards: AnalyticalDashboardDto[];
}
declare class QueryResponseDto {
    query: string;
    response: string;
    _id: string;
}
declare class DataManagementDto {
    _id: string;
    mdo: string[];
    transaction_volumes: Record<string, string>;
    data_security: string;
    data_retention: string;
    data_residency: string;
}
declare class DocumentDto {
    title: string;
    desc: string;
    type: string[];
    source: string[];
    number_range: string;
    storage_requirements: string;
    attachments: string[];
    activity_id: string[];
    is_deleted: boolean;
    _id: string;
}
declare class ComplianceScenarioDto {
    title: string;
    description: string;
    attachments: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
    _id: string;
}
declare class ControlsDto {
    title: string;
    description: string;
    activity_id: string[];
    mdo_id: string[];
    _id: string;
}
export declare class UpdatedDataDto {
    process_area: string;
    io_info: IoInfoDto;
    activity: ActivityDto[];
    control_and_monitoring: ControlAndMonitoringDto[];
    query_response: QueryResponseDto[];
    data_management: DataManagementDto[];
    document: DocumentDto[];
    compliance_scenario: ComplianceScenarioDto[];
    controls: ControlsDto[];
    is_deleted: boolean;
    name: string;
    _id: string;
}
export declare class DeleteProcessErrorDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export {};
