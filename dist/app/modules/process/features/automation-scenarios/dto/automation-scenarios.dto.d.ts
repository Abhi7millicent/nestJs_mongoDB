export declare class AutomationScenarioDto {
    _id: string;
    type: string;
    title: string;
    desc: string;
    technology: string;
    last_modified_by: string;
    activity_id: string[];
    mdo_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class UpsertAutomationScenarioDto {
    _id: string;
    automation_scenario: AutomationScenarioDto[];
}
export declare class AutomationScenarioDataDto {
    type: string;
    title: string;
    desc: string;
    technology: string;
    activity_id: string[];
    mdo_id: string[];
    integration_scenario_id: string[];
    is_deleted: boolean;
}
export declare class UpsertAutomationScenarioDataDto {
    _id: string;
    automation_scenario: AutomationScenarioDataDto[];
}
export declare class AutomationScenarioApiResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data?: {
        created: AutomationScenarioDataDto[];
        updated: any[];
    };
}
export declare class AutomationScenarioErrorResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
}
export declare class DeleteAutomationScenarioResponseDto {
    statusCode: number;
    success: boolean;
    message: string;
    data: {
        _id: string;
        automation_scenario_id: string;
    };
}
export declare class AutomationScenarioErrorPutDto {
    statusCode: number;
    success: boolean;
    error: string;
}
