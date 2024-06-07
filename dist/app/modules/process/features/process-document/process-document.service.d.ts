import { ProcessDocumentDto } from './dto/process-document.dto';
import { ProcessRepository } from '../../process.repository';
export declare class ProcessDocumentService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    create(processId: string, processDocumentDto: ProcessDocumentDto): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    updateProcessDocument(processId: string, pdId: string, updateProcessDocumentDto: ProcessDocumentDto): Promise<any>;
    updateProcessDocumentIsDeleted(processId: string, pdId: string): Promise<any>;
    updateProcessDocumentsIsSoftDeleted(processId: string, pdId: string): Promise<any>;
    remove(id: number): string;
}
