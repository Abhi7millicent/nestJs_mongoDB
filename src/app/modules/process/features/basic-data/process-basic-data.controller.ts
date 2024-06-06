import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProcessBasicDataService } from './process-basic-data.service';
import { Process } from '../../process.schema';

@Controller('process-basic-data')
export class ProcessBasicDataController {
  constructor(
    private readonly processBasicDataService: ProcessBasicDataService,
  ) {}
  @Post()
  async create(@Body() createProcessDto: Process) {
    return this.processBasicDataService.createProcessBasicData(
      createProcessDto,
    );
  }

  @Get()
  async getAll(): Promise<Process[]> {
    return this.processBasicDataService.getAllProcessBasicData();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Process> {
    return this.processBasicDataService.getProcessBasicDataById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Process>,
  ): Promise<Process> {
    return this.processBasicDataService.updateProcessBasicData(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Process> {
    return this.processBasicDataService.deleteProcessBasicData(id);
  }
}
