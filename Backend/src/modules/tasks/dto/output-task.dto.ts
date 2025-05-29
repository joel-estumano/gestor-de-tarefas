import { IntersectionType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';

export class OutputTaskDto extends IntersectionType(CreateTaskDto, UpdateTaskDto) {}
