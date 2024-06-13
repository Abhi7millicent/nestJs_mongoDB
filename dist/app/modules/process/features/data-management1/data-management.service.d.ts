import { ProcessRepository } from '../../process.repository';
import { DataManagementDto } from './dto/data-management.dto';
export declare class DataManagementService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    update(processId: string, dataManagementId: string, dataManagementDto: DataManagementDto): Promise<any>;
}
