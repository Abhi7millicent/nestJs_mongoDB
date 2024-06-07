export declare enum controlAndMonitoringData {
    I = "workflows",
    II = "kpis",
    III = "reports",
    IV = "analytical_dashboards"
}
export declare const controlAndMonitoring: {
    [key in controlAndMonitoringData]: string;
};
export declare const workflow = "wf_";
