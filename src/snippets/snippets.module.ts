import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/user.entity';
import { Snippets } from '../entities/snippet.entity';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';
import { SnippetSubscriber } from './snippets.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Snippets, Users])],
  controllers: [SnippetsController],
  providers: [SnippetsService, SnippetSubscriber],
  exports: [SnippetsService, TypeOrmModule],
})
export class SnippetsModule {}
