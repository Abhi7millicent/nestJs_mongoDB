"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessModule = void 0;
const common_1 = require("@nestjs/common");
const activities_module_1 = require("./features/activities/activities.module");
const basic_data_module_1 = require("./features/basic-data/basic-data.module");
const controller_and_monitoring_module_1 = require("./features/controller-and-monitoring/controller-and-monitoring.module");
const process_document_module_1 = require("./features/process-document/process-document.module");
const queries_responses_module_1 = require("./features/queries-responses/queries-responses.module");
let ProcessModule = class ProcessModule {
};
exports.ProcessModule = ProcessModule;
exports.ProcessModule = ProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [
            activities_module_1.ActivitiesModule,
            basic_data_module_1.BasicDataModule,
            controller_and_monitoring_module_1.ControllerMonitoringModule,
            process_document_module_1.ProcessDocumentModule,
            queries_responses_module_1.QueriesResponsesModule,
        ],
    })
], ProcessModule);
//# sourceMappingURL=process.module.js.map