export enum ComplianceAndScenariosData {
  I = 'compliance_scenarios_data',
  II = 'audit_trail',
}

export const ComplianceAndScenarios: {
  [key in ComplianceAndScenariosData]: string;
} = {
  [ComplianceAndScenariosData.I]: 'compliance_scenario_data',
  [ComplianceAndScenariosData.II]: 'audit_trail_scenarios',
};

export const Compliance_Scenarios_id = 'cs_';
export const audit_trail_id = 'at_';
