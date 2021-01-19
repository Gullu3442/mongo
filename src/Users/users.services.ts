import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './user.dto';
import { usersTable } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(usersTable) private userRepo: Repository<usersTable>,
  ) {}

  async CreateUser(user: UsersDto) {
    let user_exist = await this.userRepo.findOne({
      where: { User_Name: user.User_Name },
    });
    if (user_exist) {
      return { msg: 'User ALready Exists' };
    } else {
      return this.userRepo.save(user);
    }
  }

  getUser() {
    return this.userRepo.find();
  }

  updateUser({ id, body }) {
    return this.userRepo.update(id, body);
  }
}
