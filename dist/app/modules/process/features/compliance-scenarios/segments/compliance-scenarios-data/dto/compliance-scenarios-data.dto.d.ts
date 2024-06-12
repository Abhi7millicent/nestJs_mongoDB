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
