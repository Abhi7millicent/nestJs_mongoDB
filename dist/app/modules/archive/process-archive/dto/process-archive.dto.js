"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProcessArchiveDto = exports.ProcessControl = exports.ComplianceScenario = exports.AuditTrailScenarios = exports.ComplianceScenarioData = exports.AutomationScenario = exports.ProcessDocument = exports.IntegrationScenario = exports.DataManagementData = exports.QueriesAndResponses = exports.ProcessControlAndMonitoring = exports.AnalyticalDashboard = exports.Report = exports.Kpi = exports.Workflow = exports.Activity = exports.IoInfo = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class IoInfo {
    constructor() {
        this.inputs = '';
        this.outputs = '';
        this.business_outcome = '';
        this.major_requirements = '';
    }
}
exports.IoInfo = IoInfo;
class Transaction_volumes_data {
    constructor() {
        this.average_transactions_year = '';
        this.maximum_transactions_month = '';
        this.maximum_transactions_day = '';
        this.average_line_items = '';
    }
}
class Activity {
    constructor() {
        this._id = '';
        this.sr_no = '';
        this.description = '';
        this.performed_at = [];
        this.performed_by = [];
        this.performed_where = [];
        this.value_calculation_logic = '';
        this.accounts_postings = '';
        this.is_deleted = false;
    }
}
exports.Activity = Activity;
class Workflow {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.technology = '';
        this.levels = [];
        this.roles = [];
        this.activity_id = [];
        this.automation_id = [];
        this.integration_scenario_id = [];
        this.is_deleted = false;
    }
}
exports.Workflow = Workflow;
class Kpi {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.calculation_logic = '';
        this.complexity_level = [];
        this.role = [];
        this.activity_id = [];
        this.value = [];
        this.bench_mark = '';
        this.is_deleted = false;
    }
}
exports.Kpi = Kpi;
class Report {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.calculation_logic = '';
        this.attachments = [];
        this.complexity_level = [];
        this.type = [];
        this.application = [];
        this.source_data = [];
        this.role = [];
        this.activity_id = [];
        this.automation_id = [];
        this.integration_scenario_id = [];
        this.is_deleted = false;
    }
}
exports.Report = Report;
class AnalyticalDashboard {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.calculation_logic = '';
        this.attachments = [];
        this.application = [];
        this.complexity_level = [];
        this.type = [];
        this.dashboard_application = [];
        this.source_data = [];
        this.role = [];
        this.activity_id = [];
        this.automation_id = [];
        this.integration_scenario_id = [];
        this.is_deleted = false;
    }
}
exports.AnalyticalDashboard = AnalyticalDashboard;
class ProcessControlAndMonitoring {
    constructor() {
        this.workflows = [];
        this.kpis = [];
        this.reports = [];
        this.analytical_dashboards = [];
    }
}
exports.ProcessControlAndMonitoring = ProcessControlAndMonitoring;
class QueriesAndResponses {
    constructor() {
        this._id = '';
        this.query = '';
        this.response = '';
        this.is_deleted = false;
    }
}
exports.QueriesAndResponses = QueriesAndResponses;
class DataManagementData {
    constructor() {
        this.title = [];
        this.transaction_volumes = new Transaction_volumes_data();
    }
}
exports.DataManagementData = DataManagementData;
class IntegrationScenario {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.data_provider = [];
        this.data_consumer = [];
        this.api_provider = [];
        this.calling_system = [];
        this.type = [];
        this.data_volume_year = [];
        this.mode = [];
        this.data_type = [];
        this.protocol = [];
        this.tool = [];
        this.data_record_size = '';
        this.yoy_data_growth = '';
        this.data_provider_authentication = '';
        this.data_consumer_authentication = '';
        this.activity_id = [];
        this.mdo_id = [];
    }
}
exports.IntegrationScenario = IntegrationScenario;
class ProcessDocument {
    constructor() {
        this._id = '';
        this.title = '';
        this.desc = '';
        this.type = [];
        this.source = [];
        this.number_range = '';
        this.storage_requirements = '';
        this.attachments = [];
        this.activity_id = [];
        this.is_deleted = false;
    }
}
exports.ProcessDocument = ProcessDocument;
class AutomationScenario {
    constructor() {
        this._id = '';
        this.type = '';
        this.title = '';
        this.desc = '';
        this.technology = '';
        this.activity_id = [];
        this.mdo_id = [];
        this.integration_scenario_id = [];
        this.is_deleted = false;
    }
}
exports.AutomationScenario = AutomationScenario;
class ComplianceScenarioData {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.attachments = [];
        this.activity_id = [];
        this.automation_id = [];
        this.integration_scenario_id = [];
        this.is_deleted = false;
    }
}
exports.ComplianceScenarioData = ComplianceScenarioData;
class AuditTrailScenarios {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.activity_id = [];
        this.automation_id = [];
        this.attachments = [];
        this.integration_scenario_id = [];
        this.role = [];
        this.is_deleted = false;
    }
}
exports.AuditTrailScenarios = AuditTrailScenarios;
class ComplianceScenario {
    constructor() {
        this.compliance_scenario_data = [];
        this.audit_trail_scenarios = [];
    }
}
exports.ComplianceScenario = ComplianceScenario;
class ProcessControl {
    constructor() {
        this._id = '';
        this.title = '';
        this.description = '';
        this.activity_id = [];
        this.mdo_id = [];
        this.is_deleted = false;
    }
}
exports.ProcessControl = ProcessControl;
class ProcessDto {
    constructor() {
        this._id = '';
        this.function_id = [];
        this.sub_function_id = [];
        this.title = '';
        this.version_type = '';
        this.version_id = '';
        this.sop_reference = '';
        this.owner_name = '';
        this.owner_role_designation = '';
        this.release_status = '';
        this.description = '';
        this.trigger = '';
        this.created_by = '';
        this.created_on = new Date();
        this.last_modified_by = '';
        this.last_modified_on = new Date();
        this.is_deleted = false;
        this.io_info = new IoInfo();
        this.activities = [];
        this.control_and_monitoring = new ProcessControlAndMonitoring();
        this.queries_and_responses = [];
        this.data_management = new DataManagementData();
        this.integration_scenario = new IntegrationScenario();
        this.documents = [];
        this.automation_scenarios = [];
        this.compliance_scenarios = new ComplianceScenario();
        this.controls = [];
    }
}
class CreateProcessArchiveDto {
}
exports.CreateProcessArchiveDto = CreateProcessArchiveDto;
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProcessDto),
    __metadata("design:type", ProcessDto)
], CreateProcessArchiveDto.prototype, "process", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateProcessArchiveDto.prototype, "deleted_at", void 0);
//# sourceMappingURL=process-archive.dto.js.map