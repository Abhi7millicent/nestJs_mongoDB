import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { ComplianceScenarioDataDto, UpsertComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';
export declare class ComplianceScenariosDataService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateComplianceScenariosData(processId: string, complianceScenarioDataId: string, complianceScenarioDataDto: ComplianceScenarioDataDto): Promise<any>;
    upsertComplianceScenariosData(createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto): Promise<any>;
    updateComplianceScenariosDataIsDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
    updateComplianceScenariosDataIsSoftDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
}
