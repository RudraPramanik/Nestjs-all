import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './albums.controller';
import { UserStore } from './store/users.store';
import { UserAccount } from './user.account';
import { Store } from './store/store';

@Module({
  controllers: [UsersController, AlbumsController],
  providers: [{ provide: UserStore, useClass: UserStore }],
})
export class AppModule {}
