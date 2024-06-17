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
exports.UpsertWorkflowsDto = exports.WorkflowsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class WorkflowsDto {
}
exports.WorkflowsDto = WorkflowsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '666d417093b9df8f829b22a3',
        description: 'Unique identifier',
    }),
    __metadata("design:type", String)
], WorkflowsDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", String)
], WorkflowsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", String)
], WorkflowsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", String)
], WorkflowsDto.prototype, "technology", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", Array)
], WorkflowsDto.prototype, "levels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", Array)
], WorkflowsDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", Array)
], WorkflowsDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Automated data processing',
        description: 'workflow title',
    }),
    __metadata("design:type", Array)
], WorkflowsDto.prototype, "automation_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], WorkflowsDto.prototype, "integration_scenario_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WorkflowsDto.prototype, "last_modified_by", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], WorkflowsDto.prototype, "is_deleted", void 0);
class UpsertWorkflowsDto {
    constructor() {
        this.workflows = [];
    }
}
exports.UpsertWorkflowsDto = UpsertWorkflowsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '666d417093b9df8f829b22a3',
        description: 'Unique identifier',
    }),
    __metadata("design:type", String)
], UpsertWorkflowsDto.prototype, "_id", void 0);
//# sourceMappingURL=workflows.dto.js.map