import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { KPIsService } from './kpis.service';
import { KPIsDto, UpsertKPIsDto } from './dto/kpis.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class KPIsController {
  constructor(
    private readonly kpisService: KPIsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('kpis')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addKPIs(@Body() createkpisDto: UpsertKPIsDto) {
    try {
      const data = await this.kpisService.Upsert(createkpisDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'KPIs created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the KPIs');
      }
    }
  }

  // @Put(':processId/kpis/:kpisId')
  // async updateKPIs(
  //   @Param('processId') processId: string,
  //   @Param('kpisId') kpisId: string,
  //   @Body() kpisDto: any,
  // ): Promise<any> {
  //   return this.kpisService.updateKPIs(processId, kpisId, kpisDto);
  // }

  @Put(':processId/kpis-delete/:kpisId')
  @ResponseHandler()
  async updateKPIsIsDeleted(
    @Param('processId') processId: string,
    @Param('kpisId') kpisId: string,
  ) {
    try {
      const archiveData = await this.kpisService.getByProcessById(processId);

      const result = await this.kpisService.updateKPIsIsDeleted(
        processId,
        kpisId,
      );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'kpis deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the kpis');
      }
    }
  }

  // @Put(':processId/kpis-soft-delete/:kpisId')
  // async updateKPIsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('kpisId') kpisId: string,
  // ) {
  //   return this.kpisService.updateKPIsIsSoftDeleted(processId, kpisId);
  // }
}
