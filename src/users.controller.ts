import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDTO } from './dto';

let user = [];

@Controller('/users')
export class UsersController {
  @Post()
  addUsers(@Body() createUser: createUserDTO) {
    user.push(createUser);
    console.log(user);
    return 'useradded';
  }
  @Get()
  getUsers() {
    console.log('get user hitted');
    return user;
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return user.find((user) => user.id === +id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userUpdateDTO: createUserDTO) {
    const userIdx = user.findIndex((user) => +user.id === +id);

    if (!userIdx) {
      return;
    }
    user[userIdx] = userUpdateDTO;
    console.log(user)
    return 'updated';
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    user = user.filter((user) => +user.id !== +id);
    console.log(user)
    return ' user deleted';
  }
}

//body7 import {
//   Controller,
//   Get,
//   Req,
//   Post,
//   Put,
//   Delete,
//   Patch,
//   HttpCode,
//   HttpStatus,
//   Res,
//   Header,
//   Redirect,
//   Body,
// } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { PassThrough } from 'stream';

// interface videoDTO {
//   name: string;
//   tag: string;
// }
// @Controller('/users')
// export class UsersController {
//   @Post('/video')
//   addVideo(@Body() requestData: videoDTO) {
//     console.log(requestData);
//     return { success: true };
//   }
// }

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
