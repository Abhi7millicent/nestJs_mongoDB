import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BasicDataService } from './basic-data.service';
import { Process } from '../../process.schema';

@Controller('api/process-data')
export class BasicDataController {
  constructor(private readonly basicDataService: BasicDataService) {}
  @Post()
  async create(@Body() createProcessDto: Process) {
    return this.basicDataService.createProcessBasicData(createProcessDto);
  }

  @Get()
  async getAll(): Promise<Process[]> {
    return this.basicDataService.getAllProcessBasicData();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Process> {
    return this.basicDataService.getProcessBasicDataById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Process>,
  ): Promise<Process> {
    return this.basicDataService.updateProcessBasicData(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Process> {
    return this.basicDataService.deleteProcessBasicData(id);
  }
}
