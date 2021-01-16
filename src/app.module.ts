import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Category_Module } from './Category/Category.module';
import { TasksModule } from './tasks/tasks.module';
import { Category_Entity } from './Category/Category.entity';
import { usersTable } from './Users/users.entity';
import { Tasks_Entity } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'users',
      entities: [Category_Entity, usersTable, Tasks_Entity],
      synchronize: false,
    }),
    UsersModule,
    Category_Module,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log('connected To database');
  }
}
