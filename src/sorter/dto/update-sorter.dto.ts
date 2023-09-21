import { PartialType } from '@nestjs/mapped-types';
import { CreateSorterDto } from './create-sorter.dto';

export class UpdateSorterDto extends PartialType(CreateSorterDto) {}
