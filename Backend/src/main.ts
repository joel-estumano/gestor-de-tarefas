import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('main');

    app.useGlobalFilters(new HttpExceptionFilter());

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Remove automaticamente propriedades desconhecidas que não estão definidas nos DTOs.
            transform: true, // Converte os valores para os tipos esperados nos DTOs, por exemplo, de string para número.
        }),
    );

    // 🔓 Habilita CORS para permitir requisições de outras origens
    app.enableCors();

    setupSwagger(app);

    await app.listen(process.env.PORT || 3000);
    logger.log(`O aplicativo está sendo executado em: ${await app.getUrl()}`);
}
bootstrap();
