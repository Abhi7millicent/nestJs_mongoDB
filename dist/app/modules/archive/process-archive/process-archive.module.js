"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessArchiveModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const process_archive_controller_1 = require("./process-archive.controller");
const process_archive_schema_1 = require("./process-archive.schema");
const process_archive_service_1 = require("./process-archive.service");
const process_archive_repository_1 = require("./process-archive.repository");
let ProcessArchiveModule = class ProcessArchiveModule {
};
exports.ProcessArchiveModule = ProcessArchiveModule;
exports.ProcessArchiveModule = ProcessArchiveModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: process_archive_schema_1.ProcessArchive.name, schema: process_archive_schema_1.ProcessArchiveSchema },
            ]),
        ],
        controllers: [process_archive_controller_1.ProcessArchiveController],
        providers: [process_archive_service_1.ProcessArchiveService, process_archive_repository_1.ProcessArchiveRepository],
        exports: [process_archive_service_1.ProcessArchiveService],
    })
], ProcessArchiveModule);
//# sourceMappingURL=process-archive.module.js.map