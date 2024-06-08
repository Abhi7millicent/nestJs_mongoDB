import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import { ComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';
export declare class ComplianceScenariosDataController {
    private readonly complianceScenariosDataService;
    constructor(complianceScenariosDataService: ComplianceScenariosDataService);
    addComplianceScenariosData(id: string, complianceScenarioDataDto: ComplianceScenarioDataDto): Promise<any>;
    updateComplianceScenariosData(processId: string, complianceScenarioDataId: string, complianceScenarioDataDto: any): Promise<any>;
    updateComplianceScenariosDataIsDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
    updateComplianceScenariosDataIsSoftDeleted(processId: string, complianceScenarioDataId: string): Promise<any>;
}
