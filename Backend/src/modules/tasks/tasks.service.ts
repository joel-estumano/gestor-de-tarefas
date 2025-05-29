import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private tasksRepository: Repository<Task>,
    ) {}

    create(createTaskDto: CreateTaskDto) {
        const task = this.tasksRepository.create(createTaskDto);
        return this.tasksRepository.save(task);
    }

    findAll() {
        return this.tasksRepository.find();
    }

    async update(id: number, updateTaskDto: UpdateTaskDto) {
        await this.tasksRepository.update(id, updateTaskDto);
        return this.tasksRepository.findOneBy({ id });
    }

    remove(id: number) {
        return this.tasksRepository.delete(id);
    }
}
