import { Controller, Get, Inject, Ip } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  constructor(@Inject('mail') private emails: string[]) {
    console.log(this.emails)
  }
}
