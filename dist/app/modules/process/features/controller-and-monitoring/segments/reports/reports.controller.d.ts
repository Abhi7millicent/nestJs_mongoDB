import { HttpStatus } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { UpsertReportsDto } from './dto/reports.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class WorkflowsController {
    private readonly reportsService;
    private readonly processArchiveService;
    constructor(reportsService: ReportsService, processArchiveService: ProcessArchiveService);
    addReports(createReportsDto: UpsertReportsDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateReportsIsDeleted(processId: string, reportsId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
