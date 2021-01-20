import {
  Get,
  Injectable,
  Controller,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }

  @Get()
  async getuser() {
    return await this.userService.getUser();
  }

  @Put('/:User_Name')
  update(@Param('User_Name') uName: string, @Body() body) {
    return this.userService.updateUser({ uName, body });
  }
}
