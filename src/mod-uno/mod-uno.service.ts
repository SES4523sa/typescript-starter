import { Injectable } from '@nestjs/common';
import { CreateModUnoDto } from './dto/create-mod-uno.dto';
import { UpdateModUnoDto } from './dto/update-mod-uno.dto';

@Injectable()
export class ModUnoService {
  create(createModUnoDto: CreateModUnoDto) {
    return 'This action adds a new modUno';
  }

  findAll() {
    return `This action returns all modUno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modUno`;
  }

  update(id: number, updateModUnoDto: UpdateModUnoDto) {
    return `This action updates a #${id} modUno`;
  }

  remove(id: number) {
    return `This action removes a #${id} modUno`;
  }
}
