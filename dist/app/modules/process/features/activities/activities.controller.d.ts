import { HttpStatus } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { UpsertActivityDto } from './dto/activities.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    addActivity(createActivityDto: UpsertActivityDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateActivity(processId: string, activityId: string, activityData: any): Promise<any>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<any>;
    updateActivityIsSoftDeleted(processId: string, activityId: string): Promise<any>;
}
