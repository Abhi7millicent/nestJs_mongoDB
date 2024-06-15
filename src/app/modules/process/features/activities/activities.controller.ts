import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  HttpException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { UpsertActivityDto } from './dto/activities.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { error } from 'console';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class ActivitiesController {
  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('/activities')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addActivity(@Body() createActivityDto: UpsertActivityDto) {
    try {
      const data = await this.activitiesService.Upsert(createActivityDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Activity created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the activity');
      }
    }
  }

  // @Put(':processId/activities/:activityId')
  // async updateActivity(
  //   @Param('processId') processId: string,
  //   @Param('activityId') activityId: string,
  //   @Body() activityData: any,
  // ): Promise<any> {
  //   return this.activitiesService.updateActivity(
  //     processId,
  //     activityId,
  //     activityData,
  //   );
  // }

  @Put(':processId/activities-delete/:activityId')
  @ResponseHandler()
  async updateActivityIsDeleted(
    @Param('processId') processId: string,
    @Param('activityId') activityId: string,
  ) {
    try {
      const archiveData =
        await this.activitiesService.getByProcessById(processId);

      const result = await this.activitiesService.updateActivityIsDeleted(
        processId,
        activityId,
      );

      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Activity deleted successfully',
        // data: result,
        data: {
          processId: processId,
          activityId: activityId,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the activity');
      }
    }
  }

  // @Put(':processId/activities-soft-delete/:activityId')
  // async updateActivityIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('activityId') activityId: string,
  // ) {
  //   return this.activitiesService.updateActivityIsSoftDeleted(
  //     processId,
  //     activityId,
  //   );
  // }
}
