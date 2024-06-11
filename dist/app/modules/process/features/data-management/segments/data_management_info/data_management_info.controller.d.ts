import { DataManagementDto } from './dto/data_management_info.dto';
import { DataManagementInfoService } from './data_management_info.service';
export declare class DataManagementInfoController {
    private readonly dataManagementInfoService;
    constructor(dataManagementInfoService: DataManagementInfoService);
    updateIntegrationScenario(processId: string, dataManagementId: string, dataManagementDto: DataManagementDto): Promise<any>;
}
