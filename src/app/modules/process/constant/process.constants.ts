export const PROCESS = {
  activities: 'activities',
  control_and_monitoring: {
    workflows: 'workflows',
    kpis: 'kpis',
    reports: 'reports',
    analytical_dashboards: 'analytical_dashboards',
  },
  queries_and_responses: 'queries_and_responses',
  data_management: 'data_management',
  integration_scenario: 'integration_scenario',
  documents: 'documents',
  automation_scenarios: 'automation_scenarios',
  compliance_scenarios: {
    compliance_scenario_data: 'compliance_scenario_data',
    audit_trail_scenarios: 'audit_trail_scenarios',
  },
  controls: 'controls',
};

// export enum controlAndMonitoringData {
//     I = "workflows",
//     II = "kpis",
//     III = "reports",
//     IV = "analytical_dashboards"
// }

// export const controlAndMonitoring: { [key in controlAndMonitoringData]: string } = {
//     [controlAndMonitoringData.I]: "workflows",
//     [controlAndMonitoringData.II]: "kpis",
//     [controlAndMonitoringData.III]: "reports",
//     [controlAndMonitoringData.IV]: "analytical_dashboards",
// };

// export const workflow = 'wf_';
export const queries_and_responses_id = 'qr_';
export const queries_and_responses = 'queries_and_responses';
export const process_document_id = 'pd_';
export const process_document = 'documents';
export const process_controls_id = 'pc_';
export const process_controls = 'documents';
export const integration_scenario = 'integration_scenario';
export const data_management = 'data_management';

//   export enum process { [key in controlAndMonitoringData]: string } = {
//     [controlAndMonitoringData.I]: "workflows",
//     [controlAndMonitoringData.II]: "kpis",
//     [controlAndMonitoringData.III]: "reports",
//     [controlAndMonitoringData.IV]: "analytical_dashboards",
//   };
