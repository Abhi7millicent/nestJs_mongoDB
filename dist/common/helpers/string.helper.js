"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
function generateId(prefix) {
    return prefix + Math.random().toString(36).substring(2, 11);
}
exports.generateId = generateId;
//# sourceMappingURL=string.helper.js.map