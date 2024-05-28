import { Injectable } from '@nestjs/common';

interface Account {
  name: string;
  age: number;
  id: number;
}

@Injectable()
export class UserAccount {
  private account = new Map<number, Account>();

  addUser(user: Account) {
    this.account.set(user.id, user);
  }
  getUsers() {
    return Array.from(this.account).map((_, user) => user);
  }
  updateUser(id: number, user: Account) {
    this.account.set(id, user);
  }
  deleteUser(id: number) {
    this.account.delete(id);
  }
}
