import { ProcessRepository } from '../../process.repository';
import { Process } from '../../process.schema';
export declare class BasicDataService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    createProcessBasicData(createProcessDto: Partial<Process>): Promise<Process>;
    getAllProcessBasicData(): Promise<Process[]>;
    getProcessBasicDataById(id: string): Promise<Process>;
    updateProcessBasicData(id: string, data: Partial<Process>): Promise<any>;
    deleteProcessBasicData(id: string): Promise<Process>;
    softDeleteProcessBasicData(id: string): Promise<Process>;
}
