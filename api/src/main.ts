import { NestFactory } from '@nestjs/core';
import { PokedexApiModule } from './pokedex-api.module';

async function bootstrap() {
  const app = await NestFactory.create(PokedexApiModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}

bootstrap();
