import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './users.controller';
import { usersTable } from './users.entity';
import { UsersService } from './users.services';

@Module({
  imports: [TypeOrmModule.forFeature([usersTable])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
