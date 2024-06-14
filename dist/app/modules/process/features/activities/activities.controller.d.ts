import { HttpStatus } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { UpsertActivityDto } from './dto/activities.dto';
export declare class ActivitiesController {
    private readonly activitiesService;
    constructor(activitiesService: ActivitiesService);
    addActivity(createActivityDto: UpsertActivityDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
