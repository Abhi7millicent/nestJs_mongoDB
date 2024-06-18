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
export declare class AuditTrailDto {
    title: string;
    description: string;
    activity_id: string[];
    automation_id: string[];
    attachments: string[];
    integration_scenario_id: string[];
    role: string[];
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class ApiResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        created?: AuditTrailDto[];
        updated?: any[];
    };
}
export declare class DeleteAuditTrailResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        audit_trail_id: string;
    };
}
export declare class CreateAuditTrailErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class DeleteAuditTrailErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
