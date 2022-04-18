"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    const opcoes = new swagger_1.DocumentBuilder()
        .setTitle('Alunos')
        .setDescription('gerenciamento de alunos')
        .setVersion('1.0')
        .addTag('Alunos')
        .build();
    const documento = swagger_1.SwaggerModule.createDocument(app, opcoes);
    swagger_1.SwaggerModule.setup('docs', app, documento);
}
bootstrap();
//# sourceMappingURL=main.js.map