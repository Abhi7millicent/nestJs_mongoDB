"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManagement1Module = void 0;
const common_1 = require("@nestjs/common");
const master_data_objects_module_1 = require("./segments/master_data_objects/master_data_objects.module");
const data_management_info_module_1 = require("./segments/data_management_info/data_management_info.module");
let DataManagement1Module = class DataManagement1Module {
};
exports.DataManagement1Module = DataManagement1Module;
exports.DataManagement1Module = DataManagement1Module = __decorate([
    (0, common_1.Module)({
        imports: [data_management_info_module_1.DataManagementInfoModule, master_data_objects_module_1.MDOModule],
    })
], DataManagement1Module);
//# sourceMappingURL=data-management.module.js.map