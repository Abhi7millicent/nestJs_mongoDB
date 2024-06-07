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
import { ActivityDto } from './dto/activities.dto';

@Controller('process-basic-data')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post('activities/:id')
  @HttpCode(HttpStatus.CREATED) // Setting default success status code to 201 Created
  async addActivity(@Param('id') id: string, @Body() activityDto: ActivityDto) {
    try {
      const data = await this.activitiesService.addActivity(id, activityDto);
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
