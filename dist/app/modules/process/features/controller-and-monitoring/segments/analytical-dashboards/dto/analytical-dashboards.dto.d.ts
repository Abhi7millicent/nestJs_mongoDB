export declare class AnalyticalDashboardsDto {
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
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertAnalyticalDashboardsDto {
    _id: string;
    analytical_dashboards: AnalyticalDashboardsDto[];
}
