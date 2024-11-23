import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * configuración global de CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Reemplaza con la URL de tu frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(process.env.MAIN_PORT);
}
bootstrap();
