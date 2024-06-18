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
export declare class AnalyticalDashboardDto {
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
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class AnalyticalDashboardApiResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        created: AnalyticalDashboardDto[];
        updated: any[];
    };
}
export declare class AnalyticalDashboardErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class AnalyticalDashboardDeleteResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        analytical_dashboard_id: string;
    };
}
export declare class AnalyticalDashboardDeleteErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
