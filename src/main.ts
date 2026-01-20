import { NestFactory } from '@nestjs/core';
import { GlobalGatewayExceptionFilter } from '../exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalGatewayExceptionFilter());
  await app.listen(process.env.API_PORT ?? 0);
}
bootstrap();
