import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
    @ApiProperty({
        description: 'Título da tarefa',
        example: 'Título qualquer',
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        description: 'Descrição da tarefa',
        example: 'O que iremos fazer!',
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'Vencimento da tarefa',
        example: '2025-05-13',
    })
    @IsNotEmpty()
    @IsString()
    dueDate: string;
}
