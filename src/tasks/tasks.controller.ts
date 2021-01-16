import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  createTask(@Body() body) {
    return this.taskService.createTask(body);
  }

  @Get()
  taskList() {
    return this.taskService.taskList();
  }
}
