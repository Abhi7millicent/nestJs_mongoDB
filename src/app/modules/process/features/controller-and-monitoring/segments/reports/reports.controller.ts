import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsDto } from './dto/reports.dto';

@Controller('process')
export class WorkflowsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('reports/:id')
  async addReports(@Param('id') id: string, @Body() reportsDto: ReportsDto) {
    return this.reportsService.addReports(id, reportsDto);
  }

  @Put(':processId/reports/:reportsId')
  async updateReports(
    @Param('processId') processId: string,
    @Param('reportsId') reportsId: string,
    @Body() reportsDto: any,
  ): Promise<any> {
    return this.reportsService.updateReports(processId, reportsId, reportsDto);
  }

  @Put(':processId/reports-delete/:reportsId')
  async updateReportsIsDeleted(
    @Param('processId') processId: string,
    @Param('reportsId') reportsId: string,
  ) {
    return this.reportsService.updateReportsIsDeleted(processId, reportsId);
  }

  @Put(':processId/reports-soft-delete/:reportsId')
  async updateReportsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('reportsId') reportsId: string,
  ) {
    return this.reportsService.updateReportsIsSoftDeleted(processId, reportsId);
  }
}
