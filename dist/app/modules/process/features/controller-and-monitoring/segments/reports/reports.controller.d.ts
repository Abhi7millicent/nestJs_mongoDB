import { ReportsService } from './reports.service';
import { UpsertReportsDto } from './dto/reports.dto';
export declare class WorkflowsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    addReports(createReportsDto: UpsertReportsDto): Promise<any>;
    updateReports(processId: string, reportsId: string, reportsDto: any): Promise<any>;
    updateReportsIsDeleted(processId: string, reportsId: string): Promise<any>;
    updateReportsIsSoftDeleted(processId: string, reportsId: string): Promise<any>;
}
