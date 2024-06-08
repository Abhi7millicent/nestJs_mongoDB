import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { ComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';
export declare class ComplianceScenariosDataService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateComplianceScenariosData(processId: string, complianceScenarioDataId: string, complianceScenarioDataDto: ComplianceScenarioDataDto): Promise<any>;
    addComplianceScenariosData(processId: string, complianceScenarioDataDto: ComplianceScenarioDataDto): Promise<any>;
    updateComplianceScenariosDataIsDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
    updateComplianceScenariosDataIsSoftDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
}
