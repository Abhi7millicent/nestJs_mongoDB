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
exports.DeleteQueriesResponseSuccessDto = exports.DeleteQueriesResponseDataDto = exports.DeleteQueryPutResponseErrorDto = exports.DeleteQueryResponseErrorDto = exports.CreateQueryResponseResponseDto = exports.CreatedQueryResponseDto = exports.CreateQueryResponseDto = exports.QueryResponseDto = exports.UpsertQueriesResponseDto = exports.QueriesResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class QueriesResponseDto {
}
exports.QueriesResponseDto = QueriesResponseDto;
class UpsertQueriesResponseDto {
    constructor() {
        this.queries_response = [];
    }
}
exports.UpsertQueriesResponseDto = UpsertQueriesResponseDto;
class QueryResponseDto {
}
exports.QueryResponseDto = QueryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'What is NestJS?' }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NestJS is a progressive Node.js framework.' }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "response", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'manthan' }),
    __metadata("design:type", String)
], QueryResponseDto.prototype, "last_modified_by", void 0);
class CreateQueryResponseDto {
}
exports.CreateQueryResponseDto = CreateQueryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '666d417093b9df8f829b22a3' }),
    __metadata("design:type", String)
], CreateQueryResponseDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [QueryResponseDto] }),
    __metadata("design:type", Array)
], CreateQueryResponseDto.prototype, "queries_response", void 0);
class CreatedQueryResponseDto {
}
exports.CreatedQueryResponseDto = CreatedQueryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'What is NestJS?' }),
    __metadata("design:type", String)
], CreatedQueryResponseDto.prototype, "query", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'NestJS is a progressive Node.js framework.' }),
    __metadata("design:type", String)
], CreatedQueryResponseDto.prototype, "response", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'qr_eas75e3zu' }),
    __metadata("design:type", String)
], CreatedQueryResponseDto.prototype, "_id", void 0);
class CreateQueryResponseResponseDto {
}
exports.CreateQueryResponseResponseDto = CreateQueryResponseResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    __metadata("design:type", Number)
], CreateQueryResponseResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], CreateQueryResponseResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'queries-responses created successfully' }),
    __metadata("design:type", String)
], CreateQueryResponseResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreatedQueryResponseDto] }),
    __metadata("design:type", Array)
], CreateQueryResponseResponseDto.prototype, "data", void 0);
class DeleteQueryResponseErrorDto {
}
exports.DeleteQueryResponseErrorDto = DeleteQueryResponseErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], DeleteQueryResponseErrorDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], DeleteQueryResponseErrorDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to create queries and response' }),
    __metadata("design:type", String)
], DeleteQueryResponseErrorDto.prototype, "error", void 0);
class DeleteQueryPutResponseErrorDto {
}
exports.DeleteQueryPutResponseErrorDto = DeleteQueryPutResponseErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], DeleteQueryPutResponseErrorDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], DeleteQueryPutResponseErrorDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Failed to delete queries and response' }),
    __metadata("design:type", String)
], DeleteQueryPutResponseErrorDto.prototype, "error", void 0);
class DeleteQueriesResponseDataDto {
}
exports.DeleteQueriesResponseDataDto = DeleteQueriesResponseDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6667e1246e91ff27e948a0e9',
        description: 'Process id',
    }),
    __metadata("design:type", String)
], DeleteQueriesResponseDataDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'qr_ruyuwn69e',
        description: 'Queries and response id',
    }),
    __metadata("design:type", String)
], DeleteQueriesResponseDataDto.prototype, "queries_response_id", void 0);
class DeleteQueriesResponseSuccessDto {
}
exports.DeleteQueriesResponseSuccessDto = DeleteQueriesResponseSuccessDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], DeleteQueriesResponseSuccessDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], DeleteQueriesResponseSuccessDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Queries and response deleted' }),
    __metadata("design:type", String)
], DeleteQueriesResponseSuccessDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: DeleteQueriesResponseDataDto }),
    __metadata("design:type", DeleteQueriesResponseDataDto)
], DeleteQueriesResponseSuccessDto.prototype, "data", void 0);
//# sourceMappingURL=queries-response.dto.js.map