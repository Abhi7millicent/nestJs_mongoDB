"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
const common_1 = require("@nestjs/common");
function HttpResponse() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            try {
                const result = await originalMethod.apply(this, args);
                if (result !== null && result.statusCode === common_1.HttpStatus.OK) {
                    return {
                        statusCode: common_1.HttpStatus.OK,
                        success: true,
                        message: result.message || 'Operation successful',
                        data: result.data || result.states || result,
                    };
                }
                else if (result !== null &&
                    result.statusCode === common_1.HttpStatus.CREATED) {
                    return {
                        statusCode: common_1.HttpStatus.CREATED,
                        success: true,
                        message: result.message || 'Operation successful',
                        data: result.data || result.states || result,
                    };
                }
                else if (result !== null &&
                    result.statusCode === common_1.HttpStatus.NOT_FOUND) {
                    return {
                        statusCode: common_1.HttpStatus.NOT_FOUND,
                        success: false,
                        message: result.message || 'Record not found',
                        data: {},
                    };
                }
                else {
                    return {
                        statusCode: common_1.HttpStatus.BAD_REQUEST,
                        success: false,
                        error: result.errorMessage || 'Invalid parameter(s) provided',
                    };
                }
            }
            catch (error) {
                return {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    success: false,
                    error: error.message || 'Internal Server Error',
                };
            }
        };
        return descriptor;
    };
}
exports.HttpResponse = HttpResponse;
//# sourceMappingURL=http-response-handler.decorator.js.map