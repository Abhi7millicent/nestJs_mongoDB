import { WorkflowsService } from './workflow.service';
import { WorkflowsDto } from './dto/workflows.dto';
export declare class WorkflowsController {
    private readonly workflowsService;
    constructor(workflowsService: WorkflowsService);
    addWorkflows(id: string, workflowsDto: WorkflowsDto[]): Promise<any>;
    updateWorkflow(processId: string, workflowId: string, workflowData: any): Promise<any>;
    updateWorkflowsIsDeleted(processId: string, workflowId: string): Promise<any>;
    updateWorkflowsIsSoftDeleted(processId: string, workflowId: string): Promise<any>;
}
