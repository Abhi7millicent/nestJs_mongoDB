export enum controlAndMonitoringData {
  I = 'workflows',
  II = 'kpis',
  III = 'reports',
  IV = 'analytical_dashboards',
}

export const controlAndMonitoring: {
  [key in controlAndMonitoringData]: string;
} = {
  [controlAndMonitoringData.I]: 'workflows',
  [controlAndMonitoringData.II]: 'kpis',
  [controlAndMonitoringData.III]: 'reports',
  [controlAndMonitoringData.IV]: 'analytical_dashboards',
};

export const workflow = 'wf_';
export const kpis = 'kpis_';
export const reports = 'report_';
export const analytical_dashboards = 'ad_';
