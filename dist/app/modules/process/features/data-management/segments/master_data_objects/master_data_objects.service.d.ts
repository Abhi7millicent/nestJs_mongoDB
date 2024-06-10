import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { MDODto } from './dto/master_data_objects';
export declare class MDOService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateMDO(processId: string, mdoId: string, mdoDto: MDODto): Promise<any>;
    updateMDOIsDeleted(processId: string, mdoId: string): Promise<any>;
    updateMDOIsSoftDeleted(processId: string, mdoId: string): Promise<any>;
    addMDO(processId: string, mdoDto: MDODto[]): Promise<any>;
}
