import { ProcessRepository } from './process.repository';
import { Process } from './process.schema';
export declare class ProcessService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    createProcessBasicData(createProcessDto: Partial<Process>): Promise<Process>;
    getAllProcess(): Promise<Process[]>;
    getProcessById(id: string): Promise<Process>;
    deleteProcess(id: string): Promise<Process>;
    softDeleteProcess(id: string): Promise<Process>;
}
