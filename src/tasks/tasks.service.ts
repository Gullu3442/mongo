import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Tasks } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Tasks) private task_Repo: Repository<Tasks>) {}

  async createTask(tasks) {
    try {
      return await this.task_Repo.save(tasks);
    } catch (e) {
      return e;
    }
  }

  taskList() {
    return this.task_Repo.find({ relations: ['user', 'category'] });
  }
}
