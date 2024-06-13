import { DataManagementDto } from './dto/data-management.dto';
import { DataManagementService } from './data-management.service';
export declare class DataManagementController {
    private readonly dataManagementService;
    constructor(dataManagementService: DataManagementService);
    updateIntegrationScenario(processId: string, dataManagementId: string, dataManagementDto: DataManagementDto): Promise<any>;
}
