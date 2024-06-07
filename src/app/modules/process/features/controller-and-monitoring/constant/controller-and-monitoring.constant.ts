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
