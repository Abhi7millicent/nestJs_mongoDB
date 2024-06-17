import { HttpStatus } from '@nestjs/common';
import { AuditTrailScenariosService } from './audit-trail.service';
import { UpsertAuditTrailScenariosDto } from './dto/audit-trail.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class AuditTrailScenariosController {
    private readonly auditTrailScenariosService;
    private readonly processArchiveService;
    constructor(auditTrailScenariosService: AuditTrailScenariosService, processArchiveService: ProcessArchiveService);
    upsertAuditTrailScenarios(createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateWorkflowsIsDeleted(processId: string, auditTrailScenariosId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            auditTrailScenariosId: string;
        };
    }>;
}
