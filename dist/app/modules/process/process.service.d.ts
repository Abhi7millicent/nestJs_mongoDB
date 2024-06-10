import { ProcessRepository } from './process.repository';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';
export declare class ProcessService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    createProcess(createProcessDto: CreateProcessDto): Promise<Process>;
    getAllProcess(): Promise<Process[]>;
    getProcessById(id: string): Promise<Process>;
    deleteProcess(id: string): Promise<Process>;
    softDeleteProcess(id: string): Promise<Process>;
}
