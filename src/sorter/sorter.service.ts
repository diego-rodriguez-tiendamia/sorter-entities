import { Injectable } from '@nestjs/common';
import { CreateSorterDto } from './dto/create-sorter.dto';
import { UpdateSorterDto } from './dto/update-sorter.dto';

@Injectable()
export class SorterService {
  create(createSorterDto: CreateSorterDto) {
    return 'This action adds a new sorter';
  }

  findAll() {
    return `This action returns all sorter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sorter`;
  }

  update(id: number, updateSorterDto: UpdateSorterDto) {
    return `This action updates a #${id} sorter`;
  }

  remove(id: number) {
    return `This action removes a #${id} sorter`;
  }
}
