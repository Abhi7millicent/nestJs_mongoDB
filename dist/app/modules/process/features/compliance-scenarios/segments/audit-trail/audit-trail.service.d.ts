import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { AuditTrailScenariosDto } from './dto/audit-trail.dto';
export declare class AuditTrailScenariosService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateAuditTrailScenarios(processId: string, AuditTrailScenariosId: string, auditTrailScenariosDto: AuditTrailScenariosDto): Promise<any>;
    addAuditTrailScenarios(processId: string, auditTrailScenariosDto: AuditTrailScenariosDto): Promise<any>;
    updateAuditTrailScenariosIsDeleted(processId: string, AuditTrailScenariosId: string): Promise<any>;
    updateAuditTrailScenariosIsSoftDeleted(processId: string, AuditTrailScenariosId: string): Promise<any>;
}
