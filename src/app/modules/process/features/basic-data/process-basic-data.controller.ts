import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProcessBasicData } from '../../process.basic.data.schema';
import { ProcessBasicDataService } from './process-basic-data.service';

@Controller('process-basic-data')
export class ProcessBasicDataController {
  constructor(
    private readonly processBasicDataService: ProcessBasicDataService,
  ) {}
  @Post()
  async create(@Body() createProcessDto: ProcessBasicData) {
    return this.processBasicDataService.createProcessBasicData(
      createProcessDto,
    );
  }

  @Get()
  async getAll(): Promise<ProcessBasicData[]> {
    return this.processBasicDataService.getAllProcessBasicData();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ProcessBasicData> {
    return this.processBasicDataService.getProcessBasicDataById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<ProcessBasicData>,
  ): Promise<ProcessBasicData> {
    return this.processBasicDataService.updateProcessBasicData(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProcessBasicData> {
    return this.processBasicDataService.deleteProcessBasicData(id);
  }
}
