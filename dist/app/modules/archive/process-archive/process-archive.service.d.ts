import { ProcessArchiveRepository } from './process-archive.repository';
import { ProcessArchive } from './process-archive.schema';
export declare class ProcessArchiveService {
    private readonly processArchiveRepository;
    constructor(processArchiveRepository: ProcessArchiveRepository);
    findAll(): Promise<ProcessArchive[]>;
    findById(id: string): Promise<ProcessArchive>;
    create(data: any): Promise<any>;
}
