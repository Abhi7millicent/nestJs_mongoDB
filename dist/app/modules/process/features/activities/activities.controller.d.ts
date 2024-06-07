import { HttpStatus } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivityDto } from './dto/activities.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    addActivity(id: string, activityDto: ActivityDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateActivity(processId: string, activityId: string, activityData: any): Promise<any>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<any>;
    updateActivityIsSoftDeleted(processId: string, activityId: string): Promise<any>;
}
