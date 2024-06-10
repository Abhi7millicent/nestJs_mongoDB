import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { DataManagementDto } from './dto/data_management_info.dto';
export declare class DataManagementService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    update(processId: string, dataManagementId: string, dataManagementDto: DataManagementDto): Promise<any>;
}
