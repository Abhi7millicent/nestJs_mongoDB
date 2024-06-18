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
import {
  CreatedReportResponse,
  DeletedReportResponse,
  FailedReportDeletionResponse,
  FailedReportResponse,
  ReportData,
  ReportsDto,
  UpsertReportsDto,
} from './dto/reports.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpResponse } from 'src/core/decorators/http-response-handler.decorator';

@ApiTags('Reports')
@Controller('v1/process')
export class WorkflowsController {
  constructor(
    private readonly reportsService: ReportsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('reports')
  @ApiOperation({ summary: 'Post report' })
  @ApiBody({ type: ReportData })
  @ApiResponse({
    status: 201,
    description: 'Reports created successfully',
    type: CreatedReportResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete report',
    type: FailedReportResponse,
  })
  @HttpResponse()
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
  @ApiOperation({ summary: 'Delete report' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'reportId',
    required: true,
    description: 'Report ID',
    example: 'report_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Report deleted',
    type: DeletedReportResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete report',
    type: FailedReportDeletionResponse,
  })
  @HttpResponse()
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
