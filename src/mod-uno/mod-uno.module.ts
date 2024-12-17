import { Module } from '@nestjs/common';
import { ModUnoService } from './mod-uno.service';
import { ModUnoController } from './mod-uno.controller';

@Module({
  controllers: [ModUnoController],
  providers: [ModUnoService],
})
export class ModUnoModule {}
