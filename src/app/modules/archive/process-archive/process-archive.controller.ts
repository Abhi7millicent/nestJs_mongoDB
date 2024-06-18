import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { ProcessArchiveService } from './process-archive.service';
import { HttpResponse } from 'src/core/decorator/http-response-handler.decorator';

@Controller('v1/process-archive')
export class ProcessArchiveController {
  constructor(private readonly processArchiveService: ProcessArchiveService) {}

  @Get()
  @HttpResponse()
  async getAll(): Promise<any> {
    const processArchives = await this.processArchiveService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Process Archives retrieved successfully',
      data: processArchives,
    };
  }

  @Get(':id')
  @HttpResponse()
  async getById(@Param('id') id: string): Promise<any> {
    try {
      const processArchive = await this.processArchiveService.findById(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Process Archive retrieved successfully',
        data: processArchive,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
