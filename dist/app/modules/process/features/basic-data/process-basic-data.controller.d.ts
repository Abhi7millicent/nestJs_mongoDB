import { ProcessBasicDataService } from './process-basic-data.service';
import { Process } from '../../process.schema';
export declare class ProcessBasicDataController {
    private readonly processBasicDataService;
    constructor(processBasicDataService: ProcessBasicDataService);
    create(createProcessDto: Process): Promise<Process>;
    getAll(): Promise<Process[]>;
    getById(id: string): Promise<Process>;
    update(id: string, data: Partial<Process>): Promise<Process>;
    delete(id: string): Promise<Process>;
}
