import { HttpStatus } from '@nestjs/common';
import { ProcessDocumentService } from './process-document.service';
import { ProcessDocumentRequestBodyDto, UpdateProcessDocumentRequestBodyDto } from './dto/process-document.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class ProcessDocumentController {
    private readonly processDocumentService;
    private readonly processArchiveService;
    constructor(processDocumentService: ProcessDocumentService, processArchiveService: ProcessArchiveService);
    create(createProcessDocumentDto: ProcessDocumentRequestBodyDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateProcessDocumentIsDeleted(params: UpdateProcessDocumentRequestBodyDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: {
            processId: string;
            pdId: string;
        };
    }>;
}
