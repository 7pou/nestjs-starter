import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeDatabase } from './config/database.config';
import { initializeSwagger } from './config/swagger.config';
async function bootstrap() {
  await initializeDatabase();
  const app = await NestFactory.create(AppModule);
  initializeSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
