/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Date } from 'mongoose';
declare class IoInfoDto {
    inputs: string;
    outputs: string;
    business_outcome: string;
    major_requirements: string;
}
declare class ControlAndMonitoringDto {
    workflows: string[];
    kpis: string[];
    reports: string[];
    analytical_dashboards: string[];
}
declare class DataManagementDto {
    master_data_objects: object[];
    data_management_info: object;
}
declare class ComplianceScenariosDto {
    compliance_scenario_data: object[];
    audit_trail_scenarios: object[];
}
export declare class CreateProcessDto {
    function_id: string[];
    sub_function_id: string[];
    title: string;
    version_type: string;
    version_id: string;
    sop_reference: string;
    owner_name: string;
    owner_role_designation: string;
    release_status: string;
    description: string;
    trigger: string;
    created_by: string;
    created_on: Date;
    last_modified_by: string;
    last_modified_on: Date;
    is_deleted: boolean;
    io_info: IoInfoDto;
    activities: object[];
    control_and_monitoring: ControlAndMonitoringDto;
    queries_and_responses: object[];
    data_management: DataManagementDto;
    integration_scenario: object;
    documents: object[];
    automation_scenarios: object[];
    compliance_scenarios: ComplianceScenariosDto;
    controls: object[];
}
export {};
