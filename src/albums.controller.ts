import {
  Controller,
  Get,
  Req,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Query,
  Headers,
  
} from '@nestjs/common';
import { Request } from 'express';

interface queryParams {
  age: number;
  name: string;
}

@Controller('/albums')
export class AlbumsController {
  @Get('/videos')
  getVideos(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return 'success';
  }
}
