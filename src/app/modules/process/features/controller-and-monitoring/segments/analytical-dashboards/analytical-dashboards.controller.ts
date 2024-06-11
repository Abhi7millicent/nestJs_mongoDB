import { Controller, Post, Put, Param, Body } from '@nestjs/common';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { UpsertAnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';

@Controller('api/process')
export class AnalyticalDashboardsController {
  constructor(
    private readonly analyticalDashboardsService: AnalyticalDashboardsService,
  ) {}

  @Post('analytical-dashboards')
  async upsertAnalyticalDashboards(
    @Body() createAnalyticalDashboardsDto: UpsertAnalyticalDashboardsDto,
  ) {
    return this.analyticalDashboardsService.Upsert(
      createAnalyticalDashboardsDto,
    );
  }

  @Put(':processId/analytical-dashboards/:analyticalDashboardsId')
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

  @Put(':processId/analytical-dashboards-delete/:analyticalDashboardsId')
  async updateAnalyticalDashboardsIsDeleted(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  ) {
    return this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(
      processId,
      analyticalDashboardsId,
    );
  }

  @Put(':processId/analytical-dashboards-soft-delete/:analyticalDashboardsId')
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
