export class IoInfo {
  public inputs: string = '';
  public outputs: string = '';
  public business_outcome: string = '';
  public major_requirements: string = '';
}

export class Activity {
  public _id: string = '';
  public sr_no: string = '';
  public description: string = '';
  public performed_at: string[] = [];
  public performed_by: string[] = [];
  public performed_where: string[] = [];
  public value_calculation_logic: string = '';
  public accounts_postings: string = '';
  public is_deleted: boolean = false;
}

export class Workflow {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public technology: string = '';
  public levels: string[] = [];
  public roles: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class Kpi {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public calculation_logic: string = '';
  public complexity_level: string[] = [];
  public type: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class Report {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public attachments: string[] = [];
  public complexity_level: string[] = [];
  public type: string[] = [];
  public application: string[] = [];
  public source_data: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AnalyticalDashboard {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public attachments: string[] = [];
  public complexity_level: string[] = [];
  public type: string[] = [];
  public dashboard_application: string[] = [];
  public source_data: string[] = [];
  public role: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class ProcessControlAndMonitoring {
  public workflows: Workflow[] = [];
  public kpis: Kpi[] = [];
  public reports: Report[] = [];
  public analytical_dashboards: AnalyticalDashboard[] = [];
}

export class QueriesAndResponses {
  public _id: string = '';
  public query: string = '';
  public response: string = '';
  public is_deleted: boolean = false;
}

export class MDO {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public activity_id: string = '';
  public is_deleted: boolean = false;
}

export class DataManagement {
  public _id: string = '';
  public average_transactions: string = '';
  public maximum_transactions_month: string = '';
  public maximum_transactions_day: string = '';
  public average_line_items: string = '';
  public data_security: string = '';
  public data_retention: string = '';
  public data_residency: string = '';
  public activity_id: string[] = [];
}

export class DataManagementData {
  public master_data_objects: MDO[] = [];
  public data_management_info: DataManagement = new DataManagement();
}

export class IntegrationScenario {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public data_provider: string[] = [];
  public data_consumer: string[] = [];
  public api_provider: string[] = [];
  public calling_system: string[] = [];
  public type: string[] = [];
  public data_volume_year: string[] = [];
  public mode: string[] = [];
  public data_type: string[] = [];
  public protocol: string[] = [];
  public tool: string[] = [];
  public data_record_size: string = '';
  public yoy_data_growth: string = '';
  public data_provider_authentication: string = '';
  public data_consumer_authentication: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
}

export class ProcessDocument {
  public _id: string = '';
  public title: string = '';
  public desc: string = '';
  public type: string[] = [];
  public source: string[] = [];
  public number_range: string = '';
  public storage_requirements: string = '';
  public attachments: string[] = [];
  public activity_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AutomationScenario {
  public _id: string = '';
  public type: string = '';
  public title: string = '';
  public desc: string = '';
  public technology: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class ComplianceScenarioData {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public attachments: string[] = [];
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public integration_scenario_id: string[] = [];
  public is_deleted: boolean = false;
}

export class AuditTrailScenarios {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public activity_id: string[] = [];
  public automation_id: string[] = [];
  public attachments: string[] = [];
  public integration_scenario_id: string[] = [];
  public role: string[] = [];
  public is_deleted: boolean = false;
}

export class ComplianceScenario {
  public compliance_scenario_data: ComplianceScenarioData[] = [];
  public audit_trail_scenarios: AuditTrailScenarios[] = [];
}

export class ProcessControl {
  public _id: string = '';
  public title: string = '';
  public description: string = '';
  public activity_id: string[] = [];
  public mdo_id: string[] = [];
  public is_deleted: boolean = false;
}

export class CreateProcessDto {
  public function_id: string[] = [];
  public sub_function_id: string[] = [];
  public title: string = '';
  public version_type: string = '';
  public version_id: string = '';
  public sop_reference: string = '';
  public owner_name: string = '';
  public owner_role_designation: string = '';
  public release_status: string = '';
  public description: string = '';
  public trigger: string = '';
  public created_by: string = '';
  public created_on: Date = new Date();
  public last_modified_by: string = '';
  public last_modified_on: Date = new Date();
  public is_deleted: boolean = false;
  public io_info: IoInfo = new IoInfo();
  public activities: Activity[] = [];
  public control_and_monitoring: ProcessControlAndMonitoring =
    new ProcessControlAndMonitoring();
  public queries_and_responses: QueriesAndResponses[] = [];
  public data_management: DataManagementData = new DataManagementData();
  public integration_scenario: IntegrationScenario = new IntegrationScenario();
  public documents: ProcessDocument[] = [];
  public automation_scenarios: AutomationScenario[] = [];
  public compliance_scenarios: ComplianceScenario = new ComplianceScenario();
  public controls: ProcessControl[] = [];
}
