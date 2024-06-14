import { ProcessControlsDto, UpsertProcessControlsDto } from './dto/process-controls.dto';
import { ProcessRepository } from '../../process.repository';
export declare class ProcessControlsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    getByProcessById(processId: string): Promise<any>;
    upsert(createProcessControlsDto: UpsertProcessControlsDto): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(processId: string, qrId: string, updateprocessControlsDto: ProcessControlsDto): Promise<any>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<any>;
    updateQueriesResponsesIsSoftDeleted(processId: string, workflowId: string): Promise<any>;
    remove(id: number): string;
}
