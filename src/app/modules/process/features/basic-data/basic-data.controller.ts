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
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { BasicDataService } from './basic-data.service';
import { Process } from '../../process.schema';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';

@Controller('v1/process')
export class BasicDataController {
  constructor(private readonly basicDataService: BasicDataService) {}
  // @Post()
  // async create(@Body() createProcessDto: Process) {
  //   return this.basicDataService.createProcessBasicData(createProcessDto);
  // }

  // @Get()
  // async getAll(): Promise<Process[]> {
  //   return this.basicDataService.getAllProcessBasicData();
  // }

  // @Get(':id')
  // async getById(@Param('id') id: string): Promise<Process> {
  //   return this.basicDataService.getProcessBasicDataById(id);
  // }

  @Put('basic-data/:id')
  @ResponseHandler()
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Process>,
  ): Promise<any> {
    try {
      const vlaue = await this.basicDataService.updateProcessBasicData(
        id,
        data,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Activity not updated successfully',
        data: vlaue,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to update the activity');
      }
    }
  }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<Process> {
  //   return this.basicDataService.deleteProcessBasicData(id);
  // }
}
