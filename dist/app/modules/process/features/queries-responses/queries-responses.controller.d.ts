import { QueriesResponsesService } from './queries-responses.service';
import { UpsertQueriesResponseDto } from './dto/queries-response.dto';
export declare class QueriesResponsesController {
    private readonly queriesResponsesService;
    constructor(queriesResponsesService: QueriesResponsesService);
    create(createQueriesResponseDto: UpsertQueriesResponseDto): Promise<any>;
    updateQueriesResponse(processId: string, qrId: string, workflowData: any): Promise<any>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<any>;
    updateQueriesResponsesIsSoftDeleted(processId: string, qrId: string): Promise<any>;
}
