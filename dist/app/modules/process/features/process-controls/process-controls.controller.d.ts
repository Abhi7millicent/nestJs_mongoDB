import { HttpStatus } from '@nestjs/common';
import { ProcessControlsService } from './process-controls.service';
import { UpsertProcessControlsDto } from './dto/process-controls.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class ProcessControlsController {
    private readonly processControlsService;
    private readonly processArchiveService;
    constructor(processControlsService: ProcessControlsService, processArchiveService: ProcessArchiveService);
    create(upsertProcessControlsDto: UpsertProcessControlsDto): Promise<{
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
