import { HttpStatus } from '@nestjs/common';

export function ResponseHandler() {
  return function (
    target: any,
    key: string | symbol,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        // Call the original controller method
        const result = await originalMethod.apply(this, args);

        // Handle success response
        if (result !== null && result.statusCode === HttpStatus.OK) {
          return {
            statusCode: HttpStatus.OK,
            success: true,
            message: result.message || 'Operation successful',
            data: result.data || result.states || result,
          };
        } else if (
          result !== null &&
          result.statusCode === HttpStatus.CREATED
        ) {
          return {
            statusCode: HttpStatus.CREATED,
            success: true,
            message: result.message || 'Operation successful',
            data: result.data || result.states || result,
          };
        } else if (
          result !== null &&
          result.statusCode === HttpStatus.NOT_FOUND
        ) {
          return {
            statusCode: HttpStatus.NOT_FOUND,
            success: false,
            message: result.message || 'Record not found',
            data: {},
          };
        } else {
          return {
            statusCode: HttpStatus.BAD_REQUEST,
            success: false,
            error: result.errorMessage || 'Invalid parameter(s) provided',
          };
        }
      } catch (error) {
        // Handle error response
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          success: false,
          error: error.message || 'Internal Server Error',
        };
      }
    };

    return descriptor;
  };
}
