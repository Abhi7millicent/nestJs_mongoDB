import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { AnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';

@Controller('process-basic-data')
export class AnalyticalDashboardsController {
  constructor(
    private readonly analyticalDashboardsService: AnalyticalDashboardsService,
  ) {}

  @Post('analytical-Dashboards/:id')
  async addAnalyticalDashboards(
    @Param('id') id: string,
    @Body() analyticalDashboardsDto: AnalyticalDashboardsDto,
  ) {
    return this.analyticalDashboardsService.addAnalyticalDashboards(
      id,
      analyticalDashboardsDto,
    );
  }

  @Put(':processId/analytical-Dashboards/:analyticalDashboardsId')
  async updateAnalyticalDashboards(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
    @Body() analyticalDashboardsDto: any,
  ): Promise<any> {
    return this.analyticalDashboardsService.updateAnalyticalDashboards(
      processId,
      analyticalDashboardsId,
      analyticalDashboardsDto,
    );
  }

  @Put(':processId/analytical-Dashboards-delete/:analyticalDashboardsId')
  async updateAnalyticalDashboardsIsDeleted(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  ) {
    return this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(
      processId,
      analyticalDashboardsId,
    );
  }

  @Put(':processId/analytical-Dashboards-soft-delete/:analyticalDashboardsId')
  async updateAnalyticalDashboardsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  ) {
    return this.analyticalDashboardsService.updateAnalyticalDashboardsIsSoftDeleted(
      processId,
      analyticalDashboardsId,
    );
  }
}
