import { Controller, Get, Inject, Ip } from '@nestjs/common';
import { UserStore } from './store/users.store';
import { UserAccount } from './user.account';

@Controller('/users')
export class UsersController {
  constructor(private store:UserStore ) {
    console.log(this.store);
  }
}
