import { ProcessDocumentService } from './process-document.service';
import { ProcessDocumentDto } from './dto/process-document.dto';
export declare class ProcessDocumentController {
    private readonly processDocumentService;
    constructor(processDocumentService: ProcessDocumentService);
    create(id: string, createProcessDocumentDto: ProcessDocumentDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    updateProcessDocument(processId: string, pdId: string, processDocumentData: any): Promise<any>;
    updateProcessDocumentIsDeleted(processId: string, pdId: string): Promise<any>;
    updateProcessDocumentsIsSoftDeleted(processId: string, pdId: string): Promise<any>;
    remove(id: string): string;
}
