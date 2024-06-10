import { ProcessRepository } from '../../process.repository';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';
export declare class IntegrationScenarioService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    update(processId: string, integrationScenarioId: string, updateIntegrationScenarioDto: UpdateIntegrationScenarioDto): Promise<any>;
}
