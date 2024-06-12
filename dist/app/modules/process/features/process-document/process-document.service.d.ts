import { ProcessDocumentDto, UpsertProcessDocumentDto } from './dto/process-document.dto';
import { ProcessRepository } from '../../process.repository';
export declare class ProcessDocumentService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    upsert(createProcessDocumentDto: UpsertProcessDocumentDto): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    updateProcessDocument(processId: string, pdId: string, updateProcessDocumentDto: ProcessDocumentDto): Promise<any>;
    updateProcessDocumentIsDeleted(processId: string, pdId: string): Promise<any>;
    updateProcessDocumentsIsSoftDeleted(processId: string, pdId: string): Promise<any>;
    remove(id: number): string;
}
