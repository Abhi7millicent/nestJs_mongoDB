import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import { UpsertComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';
export declare class ComplianceScenariosDataController {
    private readonly complianceScenariosDataService;
    constructor(complianceScenariosDataService: ComplianceScenariosDataService);
    addComplianceScenariosData(createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto): Promise<any>;
    updateComplianceScenariosData(processId: string, complianceScenarioDataId: string, complianceScenarioDataDto: any): Promise<any>;
    updateComplianceScenariosDataIsDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
    updateComplianceScenariosDataIsSoftDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
}
