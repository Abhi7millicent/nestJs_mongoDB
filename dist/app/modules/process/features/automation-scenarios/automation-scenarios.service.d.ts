import { ProcessRepository } from '../../process.repository';
import { AutomationScenarioDto } from './dto/automation-scenarios.dto';
export declare class AutomationScenarioService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateAutomationScenario(processId: string, automationScenarioId: string, automationScenarioDto: AutomationScenarioDto): Promise<any>;
    updateAutomationScenarioIsDeleted(processId: string, automationScenarioId: string): Promise<any>;
    updateAutomationScenarioIsSoftDeleted(processId: string, automationScenarioId: string): Promise<any>;
    addAutomationScenario(processId: string, automationScenarioDto: AutomationScenarioDto[]): Promise<any>;
}
