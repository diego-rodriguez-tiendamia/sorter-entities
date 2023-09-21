import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SorterService } from './sorter.service';
import { CreateSorterDto } from './dto/create-sorter.dto';
import { UpdateSorterDto } from './dto/update-sorter.dto';

@Controller('sorter')
export class SorterController {
  constructor(private readonly sorterService: SorterService) {}

  @Post()
  create(@Body() createSorterDto: CreateSorterDto) {
    return this.sorterService.create(createSorterDto);
  }

  @Get()
  findAll() {
    return this.sorterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sorterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSorterDto: UpdateSorterDto) {
    return this.sorterService.update(+id, updateSorterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sorterService.remove(+id);
  }
}
