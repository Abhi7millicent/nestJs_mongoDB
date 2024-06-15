import { HttpStatus } from '@nestjs/common';
import { WorkflowsService } from './workflow.service';
import { UpsertWorkflowsDto } from './dto/workflows.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class WorkflowsController {
    private readonly workflowsService;
    private readonly processArchiveService;
    constructor(workflowsService: WorkflowsService, processArchiveService: ProcessArchiveService);
    addWorkflows(createWorkflowsDto: UpsertWorkflowsDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateWorkflowsIsDeleted(processId: string, workflowId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
