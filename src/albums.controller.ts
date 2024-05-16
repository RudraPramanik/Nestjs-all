import {
  Controller,
  Get,
  Req,
  Post,
  Put,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

interface videoParams {
  id: number;
  name: string;
}

@Controller('/albums')
export class AlbumsController {
  @Get('/videos/:id/:name')
  getVideos(@Param() params: videoParams) {
    console.log(params);
    return 'success';
  }
}
