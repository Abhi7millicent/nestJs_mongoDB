import { QueriesResponseDto } from './dto/queries-response.dto';
import { ProcessRepository } from '../../process.repository';
export declare class QueriesResponsesService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    create(processId: string, queriesResponseDto: QueriesResponseDto): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(processId: string, qrId: string, updateQueriesResponseDto: QueriesResponseDto): Promise<any>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<any>;
    updateQueriesResponsesIsSoftDeleted(processId: string, workflowId: string): Promise<any>;
    remove(id: number): string;
}
