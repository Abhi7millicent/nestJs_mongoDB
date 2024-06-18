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
import {
  AnalyticalDashboardApiResponseDto,
  AnalyticalDashboardDeleteErrorResponseDto,
  AnalyticalDashboardDeleteResponseDto,
  AnalyticalDashboardDto,
  AnalyticalDashboardErrorResponseDto,
  UpsertAnalyticalDashboardsDto,
} from './dto/analytical-dashboards.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Analytical-dashboard')
@Controller('v1/process')
export class AnalyticalDashboardsController {
  constructor(
    private readonly analyticalDashboardsService: AnalyticalDashboardsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('analytical-dashboards')
  @ApiOperation({ summary: 'Post Analytical dashboard' })
  @ApiBody({ type: AnalyticalDashboardDto })
  @ApiResponse({
    status: 201,
    description: 'AnalyticalDashboards created successfully',
    type: AnalyticalDashboardApiResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete analytical dashboard',
    type: AnalyticalDashboardErrorResponseDto,
  })
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
  @ApiOperation({ summary: 'Delete analytical dashboard' })
  @ApiParam({
    name: 'processId',
    required: true,
    description: 'Process ID',
    example: '6667e1246e91ff27e948a0e9',
  })
  @ApiParam({
    name: 'analyticalDashboardId',
    required: true,
    description: 'Analytical dashboard ID',
    example: 'ad_ruyuwn69e',
  })
  @ApiResponse({
    status: 200,
    description: 'Analytical dashboard deleted',
    type: AnalyticalDashboardDeleteResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to delete analytical dashboard',
    type: AnalyticalDashboardDeleteErrorResponseDto,
  })
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
        data: {
          processId: processId,
          analyticalDashboardsId: analyticalDashboardsId,
        },
        // data: result,
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
