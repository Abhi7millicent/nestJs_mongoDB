export declare class ReportsDto {
    _id: string;
    title: string;
    description: string;
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
