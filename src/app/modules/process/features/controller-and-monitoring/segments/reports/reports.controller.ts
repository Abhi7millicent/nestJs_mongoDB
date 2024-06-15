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
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsDto, UpsertReportsDto } from './dto/reports.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class WorkflowsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('reports')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addReports(@Body() createReportsDto: UpsertReportsDto) {
    try {
      const data = await this.reportsService.Upsert(createReportsDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'reports created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the reports');
      }
    }
  }

  // @Put(':processId/reports/:reportsId')
  // async updateReports(
  //   @Param('processId') processId: string,
  //   @Param('reportsId') reportsId: string,
  //   @Body() reportsDto: any,
  // ): Promise<any> {
  //   return this.reportsService.updateReports(processId, reportsId, reportsDto);
  // }

  @Put(':processId/reports-delete/:reportsId')
  @ResponseHandler()
  async updateReportsIsDeleted(
    @Param('processId') processId: string,
    @Param('reportsId') reportsId: string,
  ) {
    try {
      const archiveData = await this.reportsService.getByProcessById(processId);

      const result = await this.reportsService.updateReportsIsDeleted(
        processId,
        reportsId,
      );
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'reports deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the reports');
      }
    }
  }

  // @Put(':processId/reports-soft-delete/:reportsId')
  // async updateReportsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('reportsId') reportsId: string,
  // ) {
  //   return this.reportsService.updateReportsIsSoftDeleted(processId, reportsId);
  // }
}
