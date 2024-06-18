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
exports.CreateProcessResponseDto = exports.CreateProcessDataDto = exports.IntegrationScenarioDto = exports.DataManagementDto = exports.TransactionVolumesDataDto = exports.ComplianceScenariosDto = exports.ControlAndMonitoringDto = exports.IoInfoDto = exports.CreateProcessDto = exports.ProcessControl = exports.ComplianceScenario = exports.AuditTrailScenarios = exports.ComplianceScenarioData = exports.AutomationScenario = exports.ProcessDocument = exports.IntegrationScenario = exports.DataManagementData = exports.QueriesAndResponses = exports.ProcessControlAndMonitoring = exports.AnalyticalDashboard = exports.Report = exports.Kpi = exports.Workflow = exports.Activity = exports.IoInfo = void 0;
const swagger_1 = require("@nestjs/swagger");
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
        this.mdo = [];
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
class CreateProcessDto {
    constructor() {
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
exports.CreateProcessDto = CreateProcessDto;
class IoInfoDto {
}
exports.IoInfoDto = IoInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Input information', example: '' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "inputs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Output information', example: '' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "outputs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Business outcome', example: '' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "business_outcome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Major requirements', example: '' }),
    __metadata("design:type", String)
], IoInfoDto.prototype, "major_requirements", void 0);
class ControlAndMonitoringDto {
}
exports.ControlAndMonitoringDto = ControlAndMonitoringDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Workflows', example: [] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "workflows", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'KPIs', example: [] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "kpis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reports', example: [] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "reports", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Analytical dashboards', example: [] }),
    __metadata("design:type", Array)
], ControlAndMonitoringDto.prototype, "analytical_dashboards", void 0);
class ComplianceScenariosDto {
}
exports.ComplianceScenariosDto = ComplianceScenariosDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Compliance scenario data', example: [] }),
    __metadata("design:type", Array)
], ComplianceScenariosDto.prototype, "compliance_scenario_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Audit trail scenarios', example: [] }),
    __metadata("design:type", Array)
], ComplianceScenariosDto.prototype, "audit_trail_scenarios", void 0);
class TransactionVolumesDataDto {
}
exports.TransactionVolumesDataDto = TransactionVolumesDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Volume description', example: 'High' }),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "volume_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Volume details',
        example: 'Details about the volume',
    }),
    __metadata("design:type", String)
], TransactionVolumesDataDto.prototype, "volume_details", void 0);
class DataManagementDto {
}
exports.DataManagementDto = DataManagementDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data management ID', example: '' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'MDO', example: '' }),
    __metadata("design:type", Array)
], DataManagementDto.prototype, "mdo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Transaction volumes',
        type: TransactionVolumesDataDto,
        example: {
            volume_description: 'High',
            volume_details: 'Details about the volume',
        },
    }),
    __metadata("design:type", TransactionVolumesDataDto)
], DataManagementDto.prototype, "transaction_volumes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data security', example: '' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_security", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data retention', example: '' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_retention", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data residency', example: '' }),
    __metadata("design:type", String)
], DataManagementDto.prototype, "data_residency", void 0);
class IntegrationScenarioDto {
}
exports.IntegrationScenarioDto = IntegrationScenarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Integration scenario ID', example: '' }),
    __metadata("design:type", String)
], IntegrationScenarioDto.prototype, "_id", void 0);
class CreateProcessDataDto {
}
exports.CreateProcessDataDto = CreateProcessDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'Function identifiers',
        example: ['F004'],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "function_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        description: 'Sub-function identifiers',
        example: ['SF004'],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "sub_function_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the process',
        example: 'Process Title',
    }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Type of the version', example: 'Final' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "version_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Version identifier', example: 'v4.0' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "version_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'SOP reference number', example: 'SOP12675' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "sop_reference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the process owner',
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "owner_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Role designation of the process owner',
        example: 'Process Owner',
    }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "owner_role_designation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Release status', example: 'Released' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "release_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the process',
        example: 'Detailed description of the process.',
    }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the trigger event',
        example: 'Trigger event description',
    }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "trigger", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creator of the process', example: 'Admin' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "created_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation date',
        example: new Date().toISOString(),
    }),
    __metadata("design:type", Date)
], CreateProcessDataDto.prototype, "created_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last modified by', example: '' }),
    __metadata("design:type", String)
], CreateProcessDataDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last modified date',
        example: new Date().toISOString(),
    }),
    __metadata("design:type", Date)
], CreateProcessDataDto.prototype, "last_modified_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Deletion flag', example: false }),
    __metadata("design:type", Boolean)
], CreateProcessDataDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: IoInfoDto, description: 'IO Information' }),
    __metadata("design:type", IoInfoDto)
], CreateProcessDataDto.prototype, "io_info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'List of activities',
        example: [],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ControlAndMonitoringDto,
        description: 'Control and Monitoring',
    }),
    __metadata("design:type", ControlAndMonitoringDto)
], CreateProcessDataDto.prototype, "control_and_monitoring", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'Queries and responses',
        example: [],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "queries_and_responses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DataManagementDto, description: 'Data management' }),
    __metadata("design:type", DataManagementDto)
], CreateProcessDataDto.prototype, "data_management", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: IntegrationScenarioDto,
        description: 'Integration scenario',
    }),
    __metadata("design:type", IntegrationScenarioDto)
], CreateProcessDataDto.prototype, "integration_scenario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'List of documents',
        example: [],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "documents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [Object],
        description: 'Automation scenarios',
        example: [],
    }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "automation_scenarios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: ComplianceScenariosDto,
        description: 'Compliance scenarios',
    }),
    __metadata("design:type", ComplianceScenariosDto)
], CreateProcessDataDto.prototype, "compliance_scenarios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Object], description: 'Controls', example: [] }),
    __metadata("design:type", Array)
], CreateProcessDataDto.prototype, "controls", void 0);
class CreateProcessResponseDto {
}
exports.CreateProcessResponseDto = CreateProcessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 201 }),
    __metadata("design:type", Number)
], CreateProcessResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag indicating the success of the operation',
        example: true,
    }),
    __metadata("design:type", Boolean)
], CreateProcessResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Message describing the result of the operation',
        example: 'Process created successfully',
    }),
    __metadata("design:type", String)
], CreateProcessResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data returned from the operation' }),
    __metadata("design:type", Object)
], CreateProcessResponseDto.prototype, "data", void 0);
//# sourceMappingURL=process.dto.js.map