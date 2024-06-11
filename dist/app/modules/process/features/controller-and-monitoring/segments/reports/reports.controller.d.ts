import { ReportsService } from './reports.service';
import { ReportsDto } from './dto/reports.dto';
export declare class WorkflowsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    addReports(id: string, reportsDto: ReportsDto[]): Promise<any>;
    updateReports(processId: string, reportsId: string, reportsDto: any): Promise<any>;
    updateReportsIsDeleted(processId: string, reportsId: string): Promise<any>;
    updateReportsIsSoftDeleted(processId: string, reportsId: string): Promise<any>;
}
