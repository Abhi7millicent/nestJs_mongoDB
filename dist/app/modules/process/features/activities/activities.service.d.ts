import { ActivityDto, UpsertActivityDto } from './dto/activities.dto';
import { ProcessRepository } from '../../process.repository';
export declare class ActivitiesService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    getByProcessById(processId: string): Promise<any>;
    updateActivity(processId: string, activityId: string, activityDto: ActivityDto): Promise<any>;
    updateActivityIsDeleted(processId: string, activityId: string): Promise<any>;
    updateActivityIsSoftDeleted(processId: string, activityId: string): Promise<any>;
    Upsert(createActivityDto: UpsertActivityDto): Promise<any>;
}
