import { HttpStatus } from '@nestjs/common';
import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import { UpsertComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class ComplianceScenariosDataController {
    private readonly complianceScenariosDataService;
    private readonly processArchiveService;
    constructor(complianceScenariosDataService: ComplianceScenariosDataService, processArchiveService: ProcessArchiveService);
    addComplianceScenariosData(createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateComplianceScenariosDataIsDeleted(processId: string, complianceScenarioDataId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
