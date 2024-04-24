import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('BookStore')
      .setDescription('BookStore API для Уралэнергосбыт')
      .setVersion('1.0')
      .addTag('author')
      .addTag('book')
      .addTag('order')
      .addTag('orderItem')
      .addTag('user')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
