import { ActivityDto } from './dto/activities.dto';
import { ProcessRepository } from '../../process.repository';
export declare class ActivitiesService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateActivity(processId: string, activityId: string, activityDto: ActivityDto): Promise<any>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<any>;
    updateActivityIsSoftDeleted(processId: string, activityId: string): Promise<any>;
    addActivity(processId: string, activityDto: ActivityDto): Promise<any>;
}
