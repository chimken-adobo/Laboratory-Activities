import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Task | null> {
  return this.tasksRepository.findOneBy({ id });
}

  create(title: string): Promise<Task> {
    const task = this.tasksRepository.create({ title });
    return this.tasksRepository.save(task);
  }

  async update(id: number, updateData: Partial<Task>): Promise<Task> {
  const task = await this.tasksRepository.findOneBy({ id });
  if (!task) {
    throw new Error('Task not found');
  }

  
  Object.assign(task, updateData);

  return this.tasksRepository.save(task);
}

  async remove(id: number): Promise<{ message: string }> {
  await this.tasksRepository.delete(id);
  return { message: `Task ${id} deleted successfully` };
}
}
