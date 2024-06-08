"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceScenariosModule = void 0;
const common_1 = require("@nestjs/common");
const audit_trail_module_1 = require("./segments/audit-trail/audit-trail.module");
const compliance_scenarios_data_module_1 = require("./segments/compliance-scenarios-data/compliance-scenarios-data.module");
let ComplianceScenariosModule = class ComplianceScenariosModule {
};
exports.ComplianceScenariosModule = ComplianceScenariosModule;
exports.ComplianceScenariosModule = ComplianceScenariosModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_trail_module_1.AuditTrailScenariosModule, compliance_scenarios_data_module_1.ComplianceScenariosDataModule],
    })
], ComplianceScenariosModule);
//# sourceMappingURL=compliance-scenarios.module.js.map