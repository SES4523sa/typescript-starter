import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModUnoModule } from './mod-uno/mod-uno.module';

@Module({
  imports: [ModUnoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
