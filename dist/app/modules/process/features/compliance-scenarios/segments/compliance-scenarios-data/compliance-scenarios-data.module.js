"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceScenariosDataModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const process_repository_1 = require("../../../../process.repository");
const process_schema_1 = require("../../../../process.schema");
const compliance_scenarios_data_controller_1 = require("./compliance-scenarios-data.controller");
const compliance_scenarios_data_service_1 = require("./compliance-scenarios-data.service");
let ComplianceScenariosDataModule = class ComplianceScenariosDataModule {
};
exports.ComplianceScenariosDataModule = ComplianceScenariosDataModule;
exports.ComplianceScenariosDataModule = ComplianceScenariosDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: process_schema_1.Process.name, schema: process_schema_1.ProcessSchema }]),
        ],
        controllers: [compliance_scenarios_data_controller_1.ComplianceScenariosDataController],
        providers: [compliance_scenarios_data_service_1.ComplianceScenariosDataService, process_repository_1.ProcessRepository],
    })
], ComplianceScenariosDataModule);
//# sourceMappingURL=compliance-scenarios-data.module.js.map