/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippets } from './snippet.entity';
// import { Snippet } from './interfaces/snippets.interface';

@Injectable()
export class SnippetsService {
  constructor(
    @InjectRepository(Snippets)
    private snippetsRepository: Repository<Snippets>,
  ) {}

  findOne(id: number): Promise<Snippets> {
    return this.snippetsRepository.findOneBy({ id });
  }

  create(createSnippetDto: CreateSnippetDto): Promise<Snippets> {
    const snippet = new Snippets();
    snippet.code = createSnippetDto.code;
    console.log(snippet);
    return this.snippetsRepository.save(snippet);
  }

  async update(updateSnippetDto: UpdateSnippetDto, id: number): Promise<void> {
    await this.snippetsRepository.update(id, updateSnippetDto);
  }

  async delete(id: number): Promise<void> {
    await this.snippetsRepository.delete(id);
  }

  findAll(): Promise<Snippets[]> {
    return this.snippetsRepository.find();
  }
}
