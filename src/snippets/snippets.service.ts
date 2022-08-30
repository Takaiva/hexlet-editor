import { Injectable } from '@nestjs/common';
import { Snippet } from './interfaces/snippets.interface';

@Injectable()
export class SnippetsService {
  private readonly snippets: Snippet[] = [];

  create(snippet: Snippet) {
    this.snippets.push(snippet);
  }

  findAll(): Snippet[] {
    return this.snippets;
  }
}
