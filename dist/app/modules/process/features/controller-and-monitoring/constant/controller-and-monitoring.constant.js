"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytical_dashboards = exports.reports = exports.kpis = exports.workflow = exports.controlAndMonitoring = exports.controlAndMonitoringData = void 0;
var controlAndMonitoringData;
(function (controlAndMonitoringData) {
    controlAndMonitoringData["I"] = "workflows";
    controlAndMonitoringData["II"] = "kpis";
    controlAndMonitoringData["III"] = "reports";
    controlAndMonitoringData["IV"] = "analytical_dashboards";
})(controlAndMonitoringData || (exports.controlAndMonitoringData = controlAndMonitoringData = {}));
exports.controlAndMonitoring = {
    [controlAndMonitoringData.I]: 'workflows',
    [controlAndMonitoringData.II]: 'kpis',
    [controlAndMonitoringData.III]: 'reports',
    [controlAndMonitoringData.IV]: 'analytical_dashboards',
};
exports.workflow = 'wf_';
exports.kpis = 'kpis_';
exports.reports = 'report_';
exports.analytical_dashboards = 'ad_';
//# sourceMappingURL=controller-and-monitoring.constant.js.map