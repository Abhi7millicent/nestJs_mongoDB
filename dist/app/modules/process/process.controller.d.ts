import { HttpStatus } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';
import { ProcessArchiveService } from '../archive/process-archive/process-archive.service';
export declare class ProcessController {
    private readonly processService;
    private readonly processArchiveService;
    constructor(processService: ProcessService, processArchiveService: ProcessArchiveService);
    createProcess(createProcessDto: CreateProcessDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: Process;
    }>;
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
