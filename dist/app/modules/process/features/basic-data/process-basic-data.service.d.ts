import { ProcessBasicDataRepository } from '../../process.repository';
import { Process } from '../../process.schema';
export declare class ProcessBasicDataService {
    private readonly processBasicDataRepository;
    constructor(processBasicDataRepository: ProcessBasicDataRepository);
    createProcessBasicData(createProcessDto: Partial<Process>): Promise<Process>;
    getAllProcessBasicData(): Promise<Process[]>;
    getProcessBasicDataById(id: string): Promise<Process>;
    updateProcessBasicData(id: string, data: Partial<Process>): Promise<any>;
    deleteProcessBasicData(id: string): Promise<Process>;
    softDeleteProcessBasicData(id: string): Promise<Process>;
}
