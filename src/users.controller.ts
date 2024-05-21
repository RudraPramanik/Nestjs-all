import {
  Controller,
  Get,
  Req,
  Post,
  Put,
  Delete,
  Patch,
  HttpCode,
  HttpStatus,
  Res,
  Header,
  Redirect,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { PassThrough } from 'stream';

interface videoDTO {
  name: string;
  tag: string;
}
@Controller('/users')
export class UsersController {
  @Post('/video')
  addVideo(@Body() requestData: videoDTO) {
    console.log(requestData);
    return { success: true };
  }
}

// @Post('/profile')
// @Redirect('/users/accounts')
// @Header('Cache-control', 'none')
// @Header('X-name', 'Rudra')
// getProfile() {
//   const rn = Math.random() * 10 + 1;
//   if (rn > 5) {
//     return {
//       url: '/users/accounts',
//       statusCode: 302,
//     };
//   } else {
//     return {
//       url: '/users/wallet',
//       statusCode: 302,
//     };
//   }
// }
// @Get('/accounts')
// redirectRoute() {
//   return 'redirected route';
// }
// @Get('/wallet')
// redirectWallet(){
//   return 'redicrct wallet'
// }
