import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './modules/tasks/tasks.module';
// import { Task } from './modules/tasks/entities/task.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            // entities: [Task],
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: true,
        }),
        TasksModule,
    ],
})
export class AppModule {}
