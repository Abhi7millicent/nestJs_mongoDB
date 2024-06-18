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
exports.KPIsDeleteErrorResponseDto = exports.KPIsDeleteResponseDto = exports.KPIsErrorResponseDto = exports.KPIsResponseDto = exports.UpsertKPIsDataDto = exports.kpisData = exports.UpsertKPIsDto = exports.KPIsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class KPIsDto {
}
exports.KPIsDto = KPIsDto;
class UpsertKPIsDto {
    constructor() {
        this.kpis = [];
    }
}
exports.UpsertKPIsDto = UpsertKPIsDto;
class kpisData {
}
exports.kpisData = kpisData;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Monthly Sales Growth',
        description: 'Title of the KPI',
    }),
    __metadata("design:type", String)
], kpisData.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Measures the monthly growth in sales revenue.',
        description: 'Description of the KPI',
    }),
    __metadata("design:type", String)
], kpisData.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Current month sales - Previous month sales / Previous month sales * 100',
        description: 'Logic used for KPI calculation',
    }),
    __metadata("design:type", String)
], kpisData.prototype, "calculation_logic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Medium'],
        description: 'Level of complexity of the KPI',
    }),
    __metadata("design:type", Array)
], kpisData.prototype, "complexity_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Sales Manager'],
        description: 'Roles associated with the KPI',
    }),
    __metadata("design:type", Array)
], kpisData.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['activity1'],
        description: 'Array of associated activities',
    }),
    __metadata("design:type", Array)
], kpisData.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['test'],
        description: 'Values associated with the KPI',
    }),
    __metadata("design:type", Array)
], kpisData.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'test',
        description: 'Benchmark value for the KPI',
    }),
    __metadata("design:type", String)
], kpisData.prototype, "bench_mark", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'jane.doe',
        description: 'User who last modified the KPI',
    }),
    __metadata("design:type", String)
], kpisData.prototype, "last_modified_by", void 0);
class UpsertKPIsDataDto {
}
exports.UpsertKPIsDataDto = UpsertKPIsDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '666d417093b9df8f829b22a3',
        description: 'Identifier for the activity',
    }),
    __metadata("design:type", String)
], UpsertKPIsDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [kpisData], description: 'Array of KPI objects' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpsertKPIsDataDto.prototype, "kpis", void 0);
class KPIsResponseDto {
}
exports.KPIsResponseDto = KPIsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201, description: 'HTTP status code' }),
    __metadata("design:type", Number)
], KPIsResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicates request success' }),
    __metadata("design:type", Boolean)
], KPIsResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'KPIs created successfully',
        description: 'Response message',
    }),
    __metadata("design:type", String)
], KPIsResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            created: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            example: 'Monthly Sales Growth',
                            description: 'Title of the KPI',
                        },
                        description: {
                            type: 'string',
                            example: 'Measures the monthly growth in sales revenue.',
                            description: 'Description of the KPI',
                        },
                        calculation_logic: {
                            type: 'string',
                            example: 'Current month sales - Previous month sales / Previous month sales * 100',
                            description: 'Logic used for KPI calculation',
                        },
                        complexity_level: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: 'Medium',
                            },
                            description: 'Level of complexity of the KPI',
                        },
                        role: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: 'Sales Manager',
                            },
                            description: 'Roles associated with the KPI',
                        },
                        activity_id: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: 'activity1',
                            },
                            description: 'Array of associated activities',
                        },
                        value: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: 'test',
                            },
                            description: 'Values associated with the KPI',
                        },
                        bench_mark: {
                            type: 'string',
                            example: 'test',
                            description: 'Benchmark value for the KPI',
                        },
                        _id: {
                            type: 'string',
                            example: 'kpis_3l251ajxa',
                            description: 'Identifier for the KPI',
                        },
                    },
                },
            },
            updated: {
                type: 'array',
                items: {
                    type: 'object',
                },
                description: 'Array of updated KPI objects',
            },
        },
    }),
    __metadata("design:type", Object)
], KPIsResponseDto.prototype, "data", void 0);
class KPIsErrorResponseDto {
}
exports.KPIsErrorResponseDto = KPIsErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'HTTP status code' }),
    __metadata("design:type", Number)
], KPIsErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Indicates request failure' }),
    __metadata("design:type", Boolean)
], KPIsErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Failed to create the KPIs',
        description: 'Error message',
    }),
    __metadata("design:type", String)
], KPIsErrorResponseDto.prototype, "error", void 0);
class KPIsDeleteResponseDto {
}
exports.KPIsDeleteResponseDto = KPIsDeleteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200, description: 'HTTP status code' }),
    __metadata("design:type", Number)
], KPIsDeleteResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Indicates request success' }),
    __metadata("design:type", Boolean)
], KPIsDeleteResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Kpis deleted', description: 'Response message' }),
    __metadata("design:type", String)
], KPIsDeleteResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                example: '6667e1246e91ff27e948a0e9',
                description: 'Process id',
            },
            kpis_id: {
                type: 'string',
                example: 'kpis_ruyuwn69e',
                description: 'Kpis id',
            },
        },
    }),
    __metadata("design:type", Object)
], KPIsDeleteResponseDto.prototype, "data", void 0);
class KPIsDeleteErrorResponseDto {
}
exports.KPIsDeleteErrorResponseDto = KPIsDeleteErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500, description: 'HTTP status code' }),
    __metadata("design:type", Number)
], KPIsDeleteErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Indicates request failure' }),
    __metadata("design:type", Boolean)
], KPIsDeleteErrorResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Failed to delete kpis',
        description: 'Error message',
    }),
    __metadata("design:type", String)
], KPIsDeleteErrorResponseDto.prototype, "error", void 0);
//# sourceMappingURL=kpis.dto.js.map