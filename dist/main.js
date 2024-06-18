"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app/app.module");
const redoc_middleware_1 = require("./core/middleware/redoc.middleware");
const dotenv = require("dotenv");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    dotenv.config();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('CVS-BPM')
        .setDescription('SAP APIS')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    (0, redoc_middleware_1.setupRedoc)(app);
    app.enableCors();
    await app.listen(3236);
}
bootstrap();
//# sourceMappingURL=main.js.map