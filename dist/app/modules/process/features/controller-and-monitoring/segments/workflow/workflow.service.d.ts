import { UpsertWorkflowsDto, WorkflowsDto } from './dto/workflows.dto';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
export declare class WorkflowsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateWorkflow(processId: string, workflowId: string, workflowsDto: WorkflowsDto): Promise<any>;
    upsert(createWorkflowsDto: UpsertWorkflowsDto): Promise<any>;
    updateWorkflowsIsDeleted(processId: string, workflowId: string): Promise<any>;
    updateWorkflowsIsSoftDeleted(processId: string, workflowId: string): Promise<any>;
}
