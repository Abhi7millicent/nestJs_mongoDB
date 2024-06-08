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
export declare const kpis = "kpis_";
export declare const reports = "report_";
export declare const analytical_dashboards = "ad_";
