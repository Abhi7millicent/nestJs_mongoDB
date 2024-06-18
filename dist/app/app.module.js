"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const database_module_1 = require("../database/database.module");
const app_config_1 = require("../core/config/app.config");
const modules_1 = require("./modules/modules");
const database_connection_1 = require("../database/database.connection");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default],
                ignoreEnvFile: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule, database_module_1.DatabaseModule],
                useClass: database_connection_1.DatabaseConnection,
                inject: [config_1.ConfigService],
            }),
            modules_1.Modules,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map