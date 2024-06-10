import { ProcessRepository } from '../../process.repository';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';
export declare class ProcessControlsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    update(processId: string, qrId: string, updateIntegrationScenarioDto: UpdateIntegrationScenarioDto): Promise<any>;
}
