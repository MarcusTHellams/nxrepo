import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/games')
  getGames() {
    return this.appService.getGames();
  }

  @Get('games/:id')
  getGame (@Param('id') id:string)
  {
    return this.appService.getGame( id );
  }
}
