import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModUnoService } from './mod-uno.service';
import { CreateModUnoDto } from './dto/create-mod-uno.dto';
import { UpdateModUnoDto } from './dto/update-mod-uno.dto';

@Controller('mod-uno')
export class ModUnoController {
  constructor(private readonly modUnoService: ModUnoService) {}

  @Post()
  create(@Body() createModUnoDto: CreateModUnoDto) {
    return this.modUnoService.create(createModUnoDto);
  }

  @Get()
  findAll() {
    return this.modUnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modUnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModUnoDto: UpdateModUnoDto) {
    return this.modUnoService.update(+id, updateModUnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modUnoService.remove(+id);
  }
}
