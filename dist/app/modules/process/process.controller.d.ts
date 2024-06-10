import { ProcessService } from './process.service';
import { Process } from './process.schema';
export declare class ProcessController {
    private readonly processService;
    constructor(processService: ProcessService);
    create(createProcessDto: Process): Promise<Process>;
    getAll(): Promise<Process[]>;
    getById(id: string): Promise<Process>;
    delete(id: string): Promise<Process>;
    softDelete(id: string): Promise<Process>;
}
