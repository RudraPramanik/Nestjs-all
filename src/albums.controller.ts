import { Controller, Get, Req, Post, Put, Delete, Patch } from '@nestjs/common';
import { Request } from 'express';

@Controller('/albums')
export class AlbumsController {
  @Post('/profile')
  getProfile(@Req() req: Request) {
    return 'hello rudra';
  }
  @Get('/rudra')
  getRudra() {
    return 'hi rudra';
  }
  @Put('/pramanik')
  getPramanik(){
    return 'hi pramanik'
  }
}
