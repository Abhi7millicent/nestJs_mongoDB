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
