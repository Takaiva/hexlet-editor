/* eslint-disable class-methods-use-this */
import {
  MiddlewareConsumer,
  RequestMethod,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './snippets/common/logger.middleware';
import { SnippetsController } from './snippets/snippets.controller';
import { SnippetsModule } from './snippets/snippets.module';
import { SnippetsService } from './snippets/snippets.service';

@Module({
  imports: [SnippetsModule],
  controllers: [AppController, SnippetsController],
  providers: [AppService, SnippetsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'snippets', method: RequestMethod.POST });
  }
}
