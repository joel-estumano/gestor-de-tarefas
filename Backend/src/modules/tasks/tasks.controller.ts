import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OutputTaskDto } from './dto/output-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    @ApiOperation({ summary: 'Adicionar uma nova tarefa' })
    @ApiResponse({
        status: 201,
        description: 'Tarefa adicionada com sucesso.',
        type: OutputTaskDto,
    })
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar tarefas' })
    @ApiResponse({
        status: 200,
        description: 'Tarefas listadas com sucesso.',
        type: OutputTaskDto,
        isArray: true,
    })
    findAll() {
        return this.tasksService.findAll();
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Atualizar uma tarefa por ID' })
    @ApiResponse({
        status: 200,
        description: 'Tarefa atualizada com sucesso.',
        type: OutputTaskDto,
    })
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.tasksService.update(+id, updateTaskDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remover uma tarefa por ID' })
    remove(@Param('id') id: string) {
        return this.tasksService.remove(+id);
    }
}
