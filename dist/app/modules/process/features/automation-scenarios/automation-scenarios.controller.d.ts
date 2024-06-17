import { HttpStatus } from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import { UpsertAutomationScenarioDto } from './dto/automation-scenarios.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class AutomationScenarioController {
    private readonly automationScenarioService;
    private readonly processArchiveService;
    constructor(automationScenarioService: AutomationScenarioService, processArchiveService: ProcessArchiveService);
    addAutomationScenario(createAutomationScenarioDto: UpsertAutomationScenarioDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateAutomationScenarioIsDeleted(processId: string, automationScenarioId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            automationScenarioId: string;
        };
    }>;
}
