import { ProcessArchiveService } from './process-archive.service';
export declare class ProcessArchiveController {
    private readonly processArchiveService;
    constructor(processArchiveService: ProcessArchiveService);
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
}
