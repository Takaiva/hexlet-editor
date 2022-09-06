/* eslint-disable class-methods-use-this */
import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default')
  root() {
    return { title: 'Hexlet Editor' };
  }

  @Get('about')
  @Render('about-page')
  getAboutPage() {
    return { title: 'About' };
  }

  @Get('compile')
  getLogs(@Query() query: any): string {
    return this.appService.run(query.code);
  }
}
