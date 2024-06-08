import { QueriesResponsesService } from './queries-responses.service';
import { QueriesResponseDto } from './dto/queries-response.dto';
export declare class QueriesResponsesController {
    private readonly queriesResponsesService;
    constructor(queriesResponsesService: QueriesResponsesService);
    create(id: string, queriesResponseDto: QueriesResponseDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    updateQueriesResponse(processId: string, qrId: string, workflowData: any): Promise<any>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<any>;
    updateQueriesResponsesIsSoftDeleted(processId: string, qrId: string): Promise<any>;
    remove(id: string): string;
}
