import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';

@Controller('api/process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}
  @Post()
  async create(@Body() createProcessDto: Process) {
    return this.processService.createProcessBasicData(createProcessDto);
  }

  @Get()
  async getAll(): Promise<Process[]> {
    return this.processService.getAllProcess();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Process> {
    return this.processService.getProcessById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Process> {
    return this.processService.deleteProcess(id);
  }

  @Delete(':id')
  async softDelete(@Param('id') id: string): Promise<Process> {
    return this.processService.softDeleteProcess(id);
  }
}
