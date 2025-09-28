import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';   // ✅ add this line

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() updateData: Partial<Task>,   
  ) {
    return this.tasksService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
