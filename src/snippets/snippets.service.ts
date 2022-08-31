/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Snippet } from './interfaces/snippets.interface';

@Injectable()
export class SnippetsService {
  private readonly snippets: Snippet[] = JSON.parse(
    fs.readFileSync('./src/snippets/test/db.json', 'utf-8'),
  );

  create(snippet: Snippet) {
    const id = this.snippets.map((snipp) => {
      return snipp.id;
    });
    if (id.length === 0) {
      id.push(0);
    }
    snippet.id = Math.max.apply(null, id) + 1;
    this.snippets.push(snippet);
    fs.writeFileSync(
      './src/snippets/test/db.json',
      JSON.stringify(this.snippets),
    );
  }

  update(snippet: Snippet, id: number) {
    this.snippets.map((snipp) => {
      if (snipp.id === id) {
        snipp.textEditor = snippet.textEditor;
        return snipp;
      }
      return snipp;
    });
    fs.writeFileSync(
      './src/snippets/test/db.json',
      JSON.stringify(this.snippets),
    );
  }

  delete(id: number) {
    const result = this.snippets.filter((snipp) => snipp.id !== id);
    fs.writeFileSync('./src/snippets/test/db.json', JSON.stringify(result));
  }

  findAll(): Snippet[] {
    const all = JSON.parse(
      fs.readFileSync('./src/snippets/test/db.json', 'utf-8'),
    );
    return all;
  }
}
