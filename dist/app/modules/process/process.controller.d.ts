import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    createProcess(createProcessDto: CreateProcessDto): Promise<Process>;
    getAll(): Promise<Process[]>;
    getById(id: string): Promise<Process>;
    delete(id: string): Promise<Process>;
    softDelete(id: string): Promise<Process>;
}
