import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    { provide: 'DATABASE_NAME', useValue: 'MOON_NIGHT' },
    { provide: 'mail', useValue: ['admin@gmail.com, some@gmail.com'] },
  ],
})
export class AppModule {}
