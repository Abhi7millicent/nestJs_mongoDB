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
exports.UpsertAutomationScenarioDto = exports.AutomationScenarioDto = void 0;
const class_validator_1 = require("class-validator");
class AutomationScenarioDto {
    constructor() {
        this.is_deleted = false;
    }
}
exports.AutomationScenarioDto = AutomationScenarioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "desc", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "technology", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AutomationScenarioDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "activity_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "mdo_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], AutomationScenarioDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AutomationScenarioDto.prototype, "is_deleted", void 0);
class UpsertAutomationScenarioDto {
    constructor() {
        this.automation_scenario = [];
    }
}
exports.UpsertAutomationScenarioDto = UpsertAutomationScenarioDto;
//# sourceMappingURL=automation-scenarios.dto.js.map