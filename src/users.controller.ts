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
import { UserService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: createUserDTO) {
    this.userService.addUser(createUserDTO);
    return { message: 'USER ADDED' };
  }
  @Get()
  getAllUser() {
    return this.userService.getUsers();
  }

  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.userService.getUser(+id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: createUserDTO) {
    this.userService.updateUser(+id, updateUserDto);
    return { message: 'user updated' };
  }

  @Delete()
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(+id);
    return { message: 'USER DELETED' };
  }
}
