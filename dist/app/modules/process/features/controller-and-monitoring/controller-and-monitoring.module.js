"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerMonitoringModule = void 0;
const common_1 = require("@nestjs/common");
const workflow_module_1 = require("./segments/workflow/workflow.module");
const analytical_dashboards_module_1 = require("./segments/analytical-dashboards/analytical-dashboards.module");
const reports_module_1 = require("./segments/reports/reports.module");
const kpis_module_1 = require("./segments/kpis/kpis.module");
let ControllerMonitoringModule = class ControllerMonitoringModule {
};
exports.ControllerMonitoringModule = ControllerMonitoringModule;
exports.ControllerMonitoringModule = ControllerMonitoringModule = __decorate([
    (0, common_1.Module)({
        imports: [
            workflow_module_1.WorkflowModule,
            analytical_dashboards_module_1.AnalyticalDashboardsModule,
            reports_module_1.ReportsModule,
            kpis_module_1.KPIsModule,
        ],
    })
], ControllerMonitoringModule);
//# sourceMappingURL=controller-and-monitoring.module.js.map