import { HttpStatus } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/activities.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class ActivitiesController {
    private readonly activitiesService;
    private readonly processArchiveService;
    constructor(activitiesService: ActivitiesService, processArchiveService: ProcessArchiveService);
    addActivity(createActivityDto: CreateActivityDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            activityId: string;
        };
    }>;
}
