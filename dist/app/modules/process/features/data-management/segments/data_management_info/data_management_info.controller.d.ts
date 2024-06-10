import { DataManagementService } from './data_management_info.service';
import { DataManagementDto } from './dto/data_management_info.dto';
export declare class IntegrationScenarioController {
    private readonly dataManagementService;
    constructor(dataManagementService: DataManagementService);
    updateIntegrationScenario(processId: string, dataManagementId: string, dataManagementDto: DataManagementDto): Promise<any>;
}
