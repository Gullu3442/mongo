import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { UsersDto } from './user.dto';
import { UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(user) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async getUser() {
    return await this.userModel.find().exec();
  }
  async updateUser({ uName, body }) {
    return await this.userModel.updateOne({ User_Name: uName }, body);
  }
}
