import { ProcessControlsService } from './process-controls.service';
import { ProcessControlsDto } from './dto/process-controls.dto';
export declare class ProcessControlsController {
    private readonly processControlsService;
    constructor(processControlsService: ProcessControlsService);
    create(id: string, processControlsDto: ProcessControlsDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    updateQueriesResponse(processId: string, qrId: string, workflowData: any): Promise<any>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<any>;
    updateQueriesResponsesIsSoftDeleted(processId: string, qrId: string): Promise<any>;
    remove(id: string): string;
}
