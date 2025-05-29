import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, isBoolean } from 'class-validator';

export class UpdateTaskDto extends OmitType(CreateTaskDto, [] as const) {
    @ApiProperty({
        description: 'Status da tarefa completa',
        example: true,
    })
    @IsBoolean()
    completed: boolean;
}
