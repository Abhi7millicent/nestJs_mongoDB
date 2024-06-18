import { ProcessService } from './process.service';
import { ProcessArchiveService } from '../archive/process-archive/process-archive.service';
export declare class ProcessController {
    private readonly processService;
    private readonly processArchiveService;
    constructor(processService: ProcessService, processArchiveService: ProcessArchiveService);
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
