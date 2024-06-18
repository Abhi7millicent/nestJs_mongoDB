"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
class AppConfig {
    constructor() {
        console.log('env:', process.env.NODE_ENV);
        const environment = process.env.NODE_ENV;
        const envFilePath = path.resolve(__dirname, `../../${environment}.env`);
        this.envConfig = dotenv.parse(fs.readFileSync(envFilePath));
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map