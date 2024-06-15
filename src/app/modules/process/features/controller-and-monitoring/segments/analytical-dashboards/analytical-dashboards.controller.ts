import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { UpsertAnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class AnalyticalDashboardsController {
  constructor(
    private readonly analyticalDashboardsService: AnalyticalDashboardsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('analytical-dashboards')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async upsertAnalyticalDashboards(
    @Body() createAnalyticalDashboardsDto: UpsertAnalyticalDashboardsDto,
  ) {
    try {
      const data = await this.analyticalDashboardsService.Upsert(
        createAnalyticalDashboardsDto,
      );
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'AnalyticalDashboards created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the AnalyticalDashboards',
        );
      }
    }
  }

  // @Put(':processId/analytical-dashboards/:analyticalDashboardsId')
  // async updateAnalyticalDashboards(
  //   @Param('processId') processId: string,
  //   @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  //   @Body() analyticalDashboardsDto: any,
  // ): Promise<any> {
  //   return this.analyticalDashboardsService.updateAnalyticalDashboards(
  //     processId,
  //     analyticalDashboardsId,
  //     analyticalDashboardsDto,
  //   );
  // }

  @Put(':processId/analytical-dashboards-delete/:analyticalDashboardsId')
  @ResponseHandler()
  async updateAnalyticalDashboardsIsDeleted(
    @Param('processId') processId: string,
    @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  ) {
    try {
      const archiveData =
        await this.analyticalDashboardsService.getByProcessById(processId);

      const result =
        await this.analyticalDashboardsService.updateAnalyticalDashboardsIsDeleted(
          processId,
          analyticalDashboardsId,
        );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
        console.log('object:', data);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'analyticalDashboards deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the analyticalDashboards',
        );
      }
    }
  }

  // @Put(':processId/analytical-dashboards-soft-delete/:analyticalDashboardsId')
  // async updateAnalyticalDashboardsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('analyticalDashboardsId') analyticalDashboardsId: string,
  // ) {
  //   return this.analyticalDashboardsService.updateAnalyticalDashboardsIsSoftDeleted(
  //     processId,
  //     analyticalDashboardsId,
  //   );
  // }
}
