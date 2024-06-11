export declare class KPIsDto {
    _id: string;
    title: string;
    description: string;
    calculation_logic: string;
    complexity_level: string[];
    type: string[];
    role: string[];
    activity_id: string[];
    automation_id: string[];
    integration_scenario_id: string[];
    last_modified_by: string;
    is_deleted: boolean;
}
export declare class UpsertKPIsDto {
    _id: string;
    kpis: KPIsDto[];
}
