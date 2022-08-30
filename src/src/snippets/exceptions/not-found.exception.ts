import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor() {
    super('Not Found!', HttpStatus.FORBIDDEN);
  }
}
