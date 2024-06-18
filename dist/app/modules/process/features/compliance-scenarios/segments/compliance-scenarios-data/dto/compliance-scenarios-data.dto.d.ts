export declare class ComplianceScenarioDataDto {
    _id: string;
    title: string;
    description: string;
    attachments: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertComplianceScenarioDataDto {
    _id: string;
    compliance_scenario: ComplianceScenarioDataDto[];
}
export declare class ComplianceScenarioDto {
    title: string;
    description: string;
    attachments: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class ComplianceScenarioApiResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data?: {
        created?: ComplianceScenarioDto[];
        updated?: any[];
    };
}
export declare class ComplianceScenarioErrorResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
export declare class DeleteComplianceScenarioResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        compliance_scenario_id: string;
    };
}
export declare class ComplianceScenarioDeleteResponseDto {
    statusCode: number;
    success: boolean;
    error: string;
}
