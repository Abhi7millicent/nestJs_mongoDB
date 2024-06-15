import { HttpStatus } from '@nestjs/common';
import { KPIsService } from './kpis.service';
import { UpsertKPIsDto } from './dto/kpis.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class KPIsController {
    private readonly kpisService;
    private readonly processArchiveService;
    constructor(kpisService: KPIsService, processArchiveService: ProcessArchiveService);
    addKPIs(createkpisDto: UpsertKPIsDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateKPIsIsDeleted(processId: string, kpisId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
