/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippets } from '../entities/snippet.entity';

@Injectable()
export class SnippetsService {
  constructor(
    @InjectRepository(Snippets)
    private snippetsRepository: Repository<Snippets>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findOne(id: number): Promise<Snippets> {
    return this.snippetsRepository.findOneBy({ id });
  }

<<<<<<< HEAD
  async create(
    createSnippetDto: CreateSnippetDto,
    id: number,
  ): Promise<Snippets> {
=======
  async create(createSnippetDto: CreateSnippetDto): Promise<Snippets> {
>>>>>>> 9fe484d6877a9ad6ce55776288bb5e70002e1e1b
    const snippet = new Snippets();
    snippet.user = await this.usersRepository.findOneBy({ id });
    snippet.code = createSnippetDto.code;
    return this.snippetsRepository.save(snippet);
  }

  async update(
    id: number,
    updateSnippetDto: UpdateSnippetDto,
  ): Promise<Snippets[]> {
    await this.snippetsRepository.update(id, updateSnippetDto);
    return this.snippetsRepository.find();
  }

  async delete(id: number): Promise<void> {
    await this.snippetsRepository.delete(id);
  }

  findAll(): Promise<Snippets[]> {
    return this.snippetsRepository.find();
  }
}
