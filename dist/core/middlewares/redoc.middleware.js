"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRedoc = void 0;
const redoc_express_1 = require("redoc-express");
function setupRedoc(app) {
    const redocOptions = {
        title: 'Your API Title',
        version: '1.0',
        specUrl: '/api-json',
    };
    app.use('/docs', (0, redoc_express_1.default)(redocOptions));
}
exports.setupRedoc = setupRedoc;
//# sourceMappingURL=redoc.middleware.js.map