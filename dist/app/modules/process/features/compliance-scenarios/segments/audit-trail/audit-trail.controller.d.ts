import { AuditTrailScenariosService } from './audit-trail.service';
import { UpsertAuditTrailScenariosDto } from './dto/audit-trail.dto';
export declare class AuditTrailScenariosController {
    private readonly auditTrailScenariosService;
    constructor(auditTrailScenariosService: AuditTrailScenariosService);
    upsertAuditTrailScenarios(createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto): Promise<any>;
    updateWorkflow(processId: string, auditTrailScenariosId: string, auditTrailScenariosDto: any): Promise<any>;
    updateWorkflowsIsDeleted(processId: string, auditTrailScenariosId: string): Promise<any>;
    updateWorkflowsIsSoftDeleted(processId: string, auditTrailScenariosId: string): Promise<any>;
}
