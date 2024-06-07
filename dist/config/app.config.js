"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
class AppConfig {
    constructor() {
        const environment = 'dev';
        const envFilePath = path.resolve(__dirname, `../../${environment}.env`);
        console.log('envFilePath:', envFilePath);
        this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map