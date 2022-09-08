/* eslint-disable class-methods-use-this */
import {
  MiddlewareConsumer,
  RequestMethod,
  Module,
  NestModule,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './snippets/common/logger.middleware';
import { Snippets } from './snippets/snippet.entity';
import { SnippetsController } from './snippets/snippets.controller';
import { SnippetsModule } from './snippets/snippets.module';
import { SnippetsService } from './snippets/snippets.service';

@Module({
  imports: [
    SnippetsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      port: 5432,
      ssl: { rejectUnauthorized: false },
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Snippets],
      migrations: ['./migrations/*.{ts,js}'],
    }),
  ],
  controllers: [AppController, SnippetsController],
  providers: [AppService, SnippetsService],
})
export class AppModule implements NestModule {
  // eslint-disable-next-line no-useless-constructor
  constructor(private dataSource: DataSource) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'snippets', method: RequestMethod.POST });
  }
}
