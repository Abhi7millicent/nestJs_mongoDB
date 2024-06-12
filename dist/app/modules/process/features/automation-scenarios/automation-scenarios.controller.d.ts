import { HttpStatus } from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import { UpsertAutomationScenarioDto } from './dto/automation-scenarios.dto';
export declare class AutomationScenarioController {
    private readonly automationScenarioService;
    constructor(automationScenarioService: AutomationScenarioService);
    addAutomationScenario(createAutomationScenarioDto: UpsertAutomationScenarioDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateAutomationScenarioIsDeleted(processId: string, automationScenarioId: string): Promise<any>;
    updateAutomationScenarioIsSoftDeleted(processId: string, automationScenarioId: string): Promise<any>;
}
