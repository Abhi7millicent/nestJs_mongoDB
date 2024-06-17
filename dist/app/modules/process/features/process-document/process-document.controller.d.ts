import { HttpStatus } from '@nestjs/common';
import { ProcessDocumentService } from './process-document.service';
import { UpsertProcessDocumentDto } from './dto/process-document.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class ProcessDocumentController {
    private readonly processDocumentService;
    private readonly processArchiveService;
    constructor(processDocumentService: ProcessDocumentService, processArchiveService: ProcessArchiveService);
    create(createProcessDocumentDto: UpsertProcessDocumentDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateProcessDocumentIsDeleted(processId: string, pdId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            pdId: string;
        };
    }>;
}
