import {Module} from "@nestjs/common";
import{UserController} from "./users.controller";
import {UsersService} from "./users.services";


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UsersService],
  })
  export class UsersModule {}
  