import { HttpStatus } from '@nestjs/common';
import { QueriesResponsesService } from './queries-responses.service';
import { UpsertQueriesResponseDto } from './dto/queries-response.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class QueriesResponsesController {
    private readonly queriesResponsesService;
    private readonly processArchiveService;
    constructor(queriesResponsesService: QueriesResponsesService, processArchiveService: ProcessArchiveService);
    create(createQueriesResponseDto: UpsertQueriesResponseDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updatequeriesresponseIsDeleted(processId: string, qrId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            qrId: string;
        };
    }>;
}
