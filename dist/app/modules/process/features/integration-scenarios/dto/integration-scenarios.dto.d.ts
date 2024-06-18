export declare class UpdateIntegrationScenarioDto {
    _id: string;
    title: string;
    description: string;
    data_provider: string[];
    data_consumer: string[];
    api_provider: string[];
    calling_system: string[];
    type: string[];
    data_volume_year: string[];
    mode: string[];
    data_type: string[];
    protocol: string[];
    tool: string[];
    data_record_size: string;
    yoy_data_growth: string;
    data_provider_authentication: string;
    data_consumer_authentication: string;
    activity_id: string[];
    mdo_id: string[];
    last_modified_by: string;
}
export declare class UpdateIntegrationScenarioDataDto {
    _id: string;
    title: string;
    description: string;
    data_provider: string[];
    data_consumer: string[];
    api_provider: string[];
    calling_system: string[];
    type: string[];
    data_volume_year: string[];
    mode: string[];
    data_type: string[];
    protocol: string[];
    tool: string[];
    data_record_size: string;
    yoy_data_growth: string;
    data_provider_authentication: string;
    data_consumer_authentication: string;
    activity_id: string[];
    mdo_id: string[];
    last_modified_by: string;
}
export declare class IntegrationProcessResponseDTO {
    _id: string;
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
    is_deleted: boolean;
    io_info: {
        inputs: string;
        outputs: string;
        business_outcome: string;
        major_requirements: string;
    };
    activities: {
        _id: string;
        sr_no: number;
        description: string;
        performed_at: string;
        performed_by: string;
        performed_where: string;
    }[];
    control_and_monitoring: {
        workflows: {
            _id: string;
            title: string;
            levels: string[];
            roles: string[];
            activity_id: string[];
            automation_id: string[];
            integration_scenario_id: string[];
            description: string;
            technology: string;
            is_deleted: boolean;
        }[];
        kpis: {
            title: string;
            description: string;
            calculation_logic: string;
            complexity_level: string[];
            role: string[];
            activity_id: string[];
            value: string[];
            bench_mark: string;
            _id: string;
        }[];
        reports: {
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
            _id: string;
        }[];
        analytical_dashboards: {
            title: string;
            description: string;
            calculation_logic: string;
            attachments: string[];
            complexity_level: string[];
            type: string[];
            dashboard_application: string[];
            source_data: string[];
            role: string[];
            application: string[];
            activity_id: string[];
            _id: string;
            is_deleted: boolean;
        }[];
    };
    queries_and_responses: {
        query: string;
        response: string;
        _id: string;
    }[];
    data_management: {
        _id: string;
        title: string[];
        transaction_volumes: {
            average_transactions_year: string;
            maximum_transactions_month: string;
            maximum_transactions_day: string;
            average_line_items: string;
        };
        data_security: string;
        data_retention: string;
        data_residency: string;
    };
    integration_scenario: {
        title: string;
        description: string;
        data_provider: string[];
        data_consumer: string[];
        api_provider: string[];
        calling_system: string[];
        type: string[];
        data_volume_year: string[];
        mode: string[];
        data_type: string[];
        protocol: string[];
        tool: string[];
        data_record_size: string;
        yoy_data_growth: string;
        data_provider_authentication: string;
        data_consumer_authentication: string;
        activity_id: string[];
        mdo_id: string[];
    };
    documents: {
        title: string;
        desc: string;
        type: string[];
        source: string[];
        number_range: string;
        storage_requirements: string;
        attachments: string[];
        activity_id: string[];
        is_deleted: boolean;
        _id: string;
    }[];
    automation_scenarios: {}[];
    compliance_scenarios: {
        compliance_scenario_data: {
            title: string;
            description: string;
            attachments: string[];
            activity_id: string[];
            automation_id: string[];
            integration_scenario_id: string[];
            is_deleted: boolean;
            _id: string;
        }[];
        audit_trail_scenarios: {}[];
    };
    controls: {
        title: string;
        description: string;
        activity_id: string[];
        mdo_id: string[];
        _id: string;
    }[];
    created_on: string;
    __v: number;
    last_modified_by: string;
    last_modified_on: string;
}
