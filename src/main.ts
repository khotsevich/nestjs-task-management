import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  if (process.env.NODE_ENV !== 'production') {
    app.enableCors();
  } else {
    app.enableCors({ origin: configService.get('server.origin') });
    logger.log(
      `Accepting requests from origin ${configService.get('server.origin')}`,
    );
  }

  const port = configService.get('server.port');
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
