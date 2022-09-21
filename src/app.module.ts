/* eslint-disable class-methods-use-this */
import {
  MiddlewareConsumer,
  RequestMethod,
  Module,
  NestModule,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './snippets/common/logger.middleware';
import { Snippets } from './entities/snippet.entity';
import { Users } from './entities/user.entity';
import { SnippetsController } from './snippets/snippets.controller';
import { SnippetsModule } from './snippets/snippets.module';
import { SnippetsService } from './snippets/snippets.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'app/assets'),
    }),
    SnippetsModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      synchronize: process.env.NODE_ENV !== 'production',
      port: Number(process.env.DATABASE_PORT),
      ssl: { rejectUnauthorized: false },
      entities: [Snippets, Users],
      migrations: ['./migrations/*.{ts,js}'],
    }),
  ],
  controllers: [
    AppController,
    SnippetsController,
    UsersController,
    AuthController,
  ],
  providers: [AppService, SnippetsService, UsersService, AuthModule],
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
