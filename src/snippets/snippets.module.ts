import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snippets } from './snippet.entity';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';
import { SnippetSubscriber } from './snippets.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Snippets])],
  controllers: [SnippetsController],
  providers: [SnippetsService, SnippetSubscriber],
  exports: [SnippetsService, TypeOrmModule],
})
export class SnippetsModule {}
