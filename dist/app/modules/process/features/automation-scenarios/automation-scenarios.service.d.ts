import { ProcessRepository } from '../../process.repository';
import { AutomationScenarioDto, UpsertAutomationScenarioDto } from './dto/automation-scenarios.dto';
export declare class AutomationScenarioService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    getByProcessById(processId: string): Promise<any>;
    updateAutomationScenario(processId: string, automationScenarioId: string, automationScenarioDto: AutomationScenarioDto): Promise<any>;
    updateAutomationScenarioIsDeleted(processId: string, automationScenarioId: string): Promise<any>;
    updateAutomationScenarioIsSoftDeleted(processId: string, automationScenarioId: string): Promise<any>;
    upsertAutomationScenario(upsertAutomationScenarioDto: UpsertAutomationScenarioDto): Promise<any>;
}
