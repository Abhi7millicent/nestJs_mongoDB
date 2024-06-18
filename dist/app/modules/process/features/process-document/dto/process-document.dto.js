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
exports.UpdateProcessDocumentResponseBodyDto = exports.UpdateProcessDocumentRequestBodyDto = exports.ProcessDocumentResponseDto = exports.ProcessDocumentDataDto = exports.ProcessDocumentRequestBodyDto = exports.ProcessDocumentItemDto = exports.UpsertProcessDocumentDto = exports.ProcessDocumentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProcessDocumentDto {
}
exports.ProcessDocumentDto = ProcessDocumentDto;
class UpsertProcessDocumentDto {
    constructor() {
        this.process_document = [];
    }
}
exports.UpsertProcessDocumentDto = UpsertProcessDocumentDto;
class ProcessDocumentItemDto {
}
exports.ProcessDocumentItemDto = ProcessDocumentItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifier for the activity',
        example: '666d417093b9df8f829b22a3',
    }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title of the document',
        example: 'Sample Document Title',
    }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Description of the document',
        example: 'This is a sample description of the document.',
    }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of document types', example: ['type1'] }),
    __metadata("design:type", Array)
], ProcessDocumentItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of document sources',
        example: ['source1'],
    }),
    __metadata("design:type", Array)
], ProcessDocumentItemDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Range of document numbers', example: '100-200' }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "number_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Storage requirements for the document',
        example: 'Store in a cool, dry place',
    }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "storage_requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of document attachments',
        example: ['attachment1'],
    }),
    __metadata("design:type", Array)
], ProcessDocumentItemDto.prototype, "attachments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of associated activities',
        example: ['activity1'],
    }),
    __metadata("design:type", Array)
], ProcessDocumentItemDto.prototype, "activity_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag indicating whether the document is deleted or not',
        example: false,
    }),
    __metadata("design:type", Boolean)
], ProcessDocumentItemDto.prototype, "is_deleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User who last modified the document',
        example: 'manthan',
    }),
    __metadata("design:type", String)
], ProcessDocumentItemDto.prototype, "last_modified_by", void 0);
class ProcessDocumentRequestBodyDto {
}
exports.ProcessDocumentRequestBodyDto = ProcessDocumentRequestBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifier for the activity',
        example: '666d417093b9df8f829b22a3',
    }),
    __metadata("design:type", String)
], ProcessDocumentRequestBodyDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ProcessDocumentRequestBodyDto.prototype, "process_document", void 0);
class ProcessDocumentDataDto {
}
exports.ProcessDocumentDataDto = ProcessDocumentDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of created documents' }),
    __metadata("design:type", Array)
], ProcessDocumentDataDto.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of updated documents' }),
    __metadata("design:type", Array)
], ProcessDocumentDataDto.prototype, "updated", void 0);
class ProcessDocumentResponseDto {
}
exports.ProcessDocumentResponseDto = ProcessDocumentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 201 }),
    __metadata("design:type", Number)
], ProcessDocumentResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag indicating the success of the operation',
        example: true,
    }),
    __metadata("design:type", Boolean)
], ProcessDocumentResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Message describing the result of the operation',
        example: 'process-document created successfully',
    }),
    __metadata("design:type", String)
], ProcessDocumentResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data returned from the operation' }),
    __metadata("design:type", ProcessDocumentDataDto)
], ProcessDocumentResponseDto.prototype, "data", void 0);
class UpdateProcessDocumentRequestBodyDto {
}
exports.UpdateProcessDocumentRequestBodyDto = UpdateProcessDocumentRequestBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Process ID',
        example: '6667e1246e91ff27e948a0e9',
    }),
    __metadata("design:type", String)
], UpdateProcessDocumentRequestBodyDto.prototype, "processId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Process document ID',
        example: 'pd_ruyuwn69e',
    }),
    __metadata("design:type", String)
], UpdateProcessDocumentRequestBodyDto.prototype, "pdId", void 0);
class UpdateProcessDocumentResponseBodyDto {
}
exports.UpdateProcessDocumentResponseBodyDto = UpdateProcessDocumentResponseBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP status code', example: 200 }),
    __metadata("design:type", Number)
], UpdateProcessDocumentResponseBodyDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Flag indicating the success of the operation',
        example: true,
    }),
    __metadata("design:type", Boolean)
], UpdateProcessDocumentResponseBodyDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Message describing the result of the operation',
        example: 'Process document deleted',
    }),
    __metadata("design:type", String)
], UpdateProcessDocumentResponseBodyDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data returned from the operation' }),
    __metadata("design:type", Object)
], UpdateProcessDocumentResponseBodyDto.prototype, "data", void 0);
//# sourceMappingURL=process-document.dto.js.map