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
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivityDto, UpsertActivityDto } from './dto/activities.dto';

@Controller('v1/process')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post('/activities')
  @HttpCode(HttpStatus.CREATED)
  async addActivity(@Body() createActivityDto: UpsertActivityDto) {
    try {
      const data = await this.activitiesService.Upsert(createActivityDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Activity created successfully',
        data: data,
      };
    } catch (error) {
      console.error('Error in addActivity controller method:', error.message);

      // Handle specific known errors
      if (error instanceof NotFoundException) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: error.message,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        // Handle unexpected errors
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Put(':processId/activities/:activityId')
  async updateActivity(
    @Param('processId') processId: string,
    @Param('activityId') activityId: string,
    @Body() activityData: any,
  ): Promise<any> {
    return this.activitiesService.updateActivity(
      processId,
      activityId,
      activityData,
    );
  }

  @Put(':processId/activities-delete/:activityId')
  async updateActivityIsDeleted(
    @Param('processId') processId: string,
    @Param('activityId') activityId: string,
  ) {
    return this.activitiesService.updateActivityIsDeleted(
      processId,
      activityId,
    );
  }

  @Put(':processId/activities-soft-delete/:activityId')
  async updateActivityIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('activityId') activityId: string,
  ) {
    return this.activitiesService.updateActivityIsSoftDeleted(
      processId,
      activityId,
    );
  }
}
