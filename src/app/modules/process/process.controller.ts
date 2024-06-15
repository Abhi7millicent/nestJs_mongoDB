import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';
import { ProcessArchiveService } from '../archive/process-archive/process-archive.service';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class ProcessController {
  constructor(
    private readonly processService: ProcessService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post()
  @ResponseHandler()
  async createProcess(@Body() createProcessDto: CreateProcessDto) {
    try {
      const data = await this.processService.createProcess(createProcessDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Process created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the Process');
      }
    }
  }

  @Get()
  @ResponseHandler()
  async getAll(): Promise<any> {
    const data = await this.processService.getAllProcess();
    try {
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Processes retrieved successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to retrieved the Process',
        );
      }
    }
  }

  @Get(':id')
  @ResponseHandler()
  async getById(@Param('id') id: string): Promise<any> {
    try {
      const data = await this.processService.getProcessById(id);
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Process retrieved successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to retrieved the Process',
        );
      }
    }
  }

  @Delete(':id')
  @ResponseHandler()
  async delete(@Param('id') id: string): Promise<any> {
    try {
      const archiveData = await this.processService.getByProcessById(id);

      const result = await this.processService.deleteProcess(id);
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: `processId: ${id} deleted successfully`,
        data: { processId: id },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the process');
      }
    }
  }

  // @Delete(':id')
  // async softDelete(@Param('id') id: string): Promise<Process> {
  //   return this.processService.softDeleteProcess(id);
  // }
}
