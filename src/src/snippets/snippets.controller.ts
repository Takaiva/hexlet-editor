/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseFilters,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippet } from './interfaces/snippets.interface';
import { SnippetsService } from './snippets.service';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { JoiValidationPipe } from './validation/validation.pipe';
import { snippetSchema } from './validation/snippetValidation';
import { ParseIntPipe } from './pipes/parse-int.pipe';
import { AuthGuard } from './auth/auth.guard';

@Controller('snippets')
@UseFilters(new HttpExceptionFilter())
export class SnippetsController {
  constructor(private snippetsService: SnippetsService) {}

  @Get()
  async findAll(): Promise<Snippet[]> {
    return this.snippetsService.findAll();
  }

  @Get(':user/:id')
  findOne(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('user', new ParseIntPipe()) user: number,
  ): string {
    console.log(id);
    return `This action returns snippet ${id} of user ${user}`;
  }

  @Post()
  // @UsePipes(new JoiValidationPipe(snippetSchema))
  async create(@Body() createSnippetDto: CreateSnippetDto) {
    console.log(createSnippetDto);
    return this.snippetsService.create(createSnippetDto);
  }

  @Put(':id')
  update(
    @Param('id', new ParseIntPipe()) id: string,
    @Body() updateSnippetDto: UpdateSnippetDto,
  ) {
    console.log(updateSnippetDto);
    return `This action updates a ${id} snippet`;
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: string) {
    return `This action removes a ${id} snippet`;
  }
}
