import { IntegrationScenarioService } from './integration-scenarios.service';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';
export declare class IntegrationScenarioController {
    private readonly integrationScenarioService;
    constructor(integrationScenarioService: IntegrationScenarioService);
    updateIntegrationScenario(processId: string, integrationScenarioId: string, updateIntegrationScenarioDto: UpdateIntegrationScenarioDto): Promise<any>;
}
