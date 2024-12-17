import { PartialType } from '@nestjs/mapped-types';
import { CreateModUnoDto } from './create-mod-uno.dto';

export class UpdateModUnoDto extends PartialType(CreateModUnoDto) {}
