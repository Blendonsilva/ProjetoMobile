import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const opcoes = new DocumentBuilder()
    .setTitle('Alunos')
    .setDescription('gerenciamento de alunos')
    .setVersion('1.0')
    .addTag('Alunos')
    .build();

  const documento = SwaggerModule.createDocument(app, opcoes);
  SwaggerModule.setup('docs', app, documento);
}
bootstrap();
