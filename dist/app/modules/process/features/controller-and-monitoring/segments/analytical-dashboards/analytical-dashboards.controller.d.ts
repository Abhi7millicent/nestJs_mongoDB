import { HttpStatus } from '@nestjs/common';
import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { UpsertAnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';
export declare class AnalyticalDashboardsController {
    private readonly analyticalDashboardsService;
    private readonly processArchiveService;
    constructor(analyticalDashboardsService: AnalyticalDashboardsService, processArchiveService: ProcessArchiveService);
    upsertAnalyticalDashboards(createAnalyticalDashboardsDto: UpsertAnalyticalDashboardsDto): Promise<{
        statusCode: HttpStatus;
        success: boolean;
        message: string;
        data: any;
    }>;
    updateAnalyticalDashboardsIsDeleted(processId: string, analyticalDashboardsId: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
