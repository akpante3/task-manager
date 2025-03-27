import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Patch(':id/complete')
  markTaskAsCompleted(@Param('id') id: string) {
    return this.tasksService.markTaskAsCompleted(id);
  }

  @Patch(':id/uncomplete')
  markTaskAsUncompleted(@Param('id') id: string) {
    return this.tasksService.markTaskAsUncompleted(id);
  }
}
