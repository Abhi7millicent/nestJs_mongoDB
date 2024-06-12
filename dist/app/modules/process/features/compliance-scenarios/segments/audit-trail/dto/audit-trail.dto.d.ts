export declare class AuditTrailScenariosDto {
    _id: string;
    title: string;
    description: string;
    activity_id: string[];
    automation_id: string[];
    attachments: string[];
    integration_scenario_id: string[];
    role: string[];
    is_deleted: boolean;
    last_modified_by: string;
}
export declare class UpsertAuditTrailScenariosDto {
    _id: string;
    audit_trail_scenarios: AuditTrailScenariosDto[];
}
