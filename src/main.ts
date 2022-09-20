/* eslint-disable import/no-import-module-exports */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'assets'));
<<<<<<< HEAD
  app.setGlobalPrefix('api');
  app.use(cookieParser());
=======
>>>>>>> 9fe484d6877a9ad6ce55776288bb5e70002e1e1b
  await app.listen(process.env.PORT || 3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
