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
    return this.userService.CreateUser(body);
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.userService.updateUser({ id, body });
  }
}
