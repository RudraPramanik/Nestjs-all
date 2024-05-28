import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: number;
  id: number;
}

@Injectable()
export class Store {
  private store = new Map<number, User>();
  constructor(){
    console.log('store init')
  }

  addUser(user: User) {
    this.store.set(user.id, user);
  }
  getUsers() {
    return Array.from(this.store).map((_, user) => user);
  }
  updateUser(id: number, user: User) {
    this.store.set(id, user);
  }
  deleteUser(id: number) {
    this.store.delete(id);
  }
}
