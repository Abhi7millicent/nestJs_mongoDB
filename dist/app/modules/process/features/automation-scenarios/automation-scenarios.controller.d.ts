import { HttpStatus } from '@nestjs/common';
import { AutomationScenarioService } from './automation-scenarios.service';
import { AutomationScenarioDto } from './dto/automation-scenarios.dto';
export declare class AutomationScenarioController {
    private readonly automationScenarioService;
    constructor(automationScenarioService: AutomationScenarioService);
    addAutomationScenario(id: string, automationScenarioDto: AutomationScenarioDto[]): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateAutomationScenarioIsDeleted(processId: string, automationScenarioId: string): Promise<any>;
    updateAutomationScenarioIsSoftDeleted(processId: string, automationScenarioId: string): Promise<any>;
}
