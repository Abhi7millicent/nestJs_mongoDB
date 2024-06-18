export declare class ReportsDto {
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
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertReportsDto {
    _id: string;
    reports: ReportsDto[];
}
export declare class ReportData {
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
    last_modified_by: string;
}
export declare class CreatedReportResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        created: ReportData[];
        updated: any[];
    };
}
export declare class FailedReportResponse {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class DeletedReportResponse {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        report_id: string;
    };
}
export declare class FailedReportDeletionResponse {
    statusCode: number;
    success: boolean;
    error: string;
}
