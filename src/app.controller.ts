/* eslint-disable class-methods-use-this */
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('compile')
  getLogs(@Query() query: any): string {
    return this.appService.run(query.code);
  }
}
