import { Controller, Get, Ip } from '@nestjs/common';

 @Controller('/users')
 export class UsersController {
  @Get()
  getUser(@Ip() ip: string) {
    console.log(ip);
    return 'hello world';
  }
}

//8 crud import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   NotFoundException,
//   HttpCode,
// } from '@nestjs/common';
// import { createUserDTO } from './dto';

// let users = [];

// @Controller('/users')
// export class UsersController {
//   @Post()
//   @HttpCode(201)
//   addUsers(@Body() createUser: createUserDTO) {
//     users.push(createUser);
//     console.log(users);
//     return { message: 'User added successfully', user: createUser };
//   }

//   @Get()
//   getUsers() {
//     console.log('Get users endpoint hit');
//     return users;
//   }

//   @Get(':id')
//   getUser(@Param('id') id: number) {
//     const user = users.find((user) => user.id === +id);
//     if (!user) {
//       throw new NotFoundException('User not found');
//     }
//     return user;
//   }

//   @Put(':id')
//   updateUser(@Param('id') id: number, @Body() userUpdateDTO: createUserDTO) {
//     const userIdx = users.findIndex((user) => +user.id === +id);

//     if (userIdx === -1) {
//       throw new NotFoundException('User not found');
//     }

//     users[userIdx] = userUpdateDTO;
//     console.log(users);
//     return { message: 'User updated successfully', user: userUpdateDTO };
//   }

//   @Delete(':id')
//   deleteUser(@Param('id') id: number) {
//     const initialLength = users.length;
//     users = users.filter((user) => +user.id !== +id);

//     if (users.length === initialLength) {
//       throw new NotFoundException('User not found');
//     }

//     console.log(users);
//     return { message: 'User deleted successfully' };
//   }
// }

// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { createUserDTO } from './dto';

// let user = [];

// @Controller('/users')
// export class UsersController {
//   @Post()
//   addUsers(@Body() createUser: createUserDTO) {
//     user.push(createUser);
//     console.log(user);
//     return 'useradded';
//   }
//   @Get()
//   getUsers() {
//     console.log('get user hitted');
//     return user;
//   }

//   @Get(':id')
//   getUser(@Param('id') id: number) {
//     return user.find((user) => user.id === +id);
//   }

//   @Put(':id')
//   updateUser(@Param('id') id: number, @Body() userUpdateDTO: createUserDTO) {
//     const userIdx = user.findIndex((user) => +user.id === +id);

//     if (!userIdx) {
//       return;
//     }
//     user[userIdx] = userUpdateDTO;
//     console.log(user)
//     return 'updated';
//   }
//   @Delete(':id')
//   deleteUser(@Param('id') id: number) {
//     user = user.filter((user) => +user.id !== +id);
//     console.log(user)
//     return ' user deleted';
//   }
// }

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
