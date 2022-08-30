/* eslint-disable class-methods-use-this */
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
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
}
