import { AnalyticalDashboardsService } from './analytical-dashboards.service';
import { AnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
export declare class AnalyticalDashboardsController {
    private readonly analyticalDashboardsService;
    constructor(analyticalDashboardsService: AnalyticalDashboardsService);
    addAnalyticalDashboards(id: string, analyticalDashboardsDto: AnalyticalDashboardsDto[]): Promise<any>;
    updateAnalyticalDashboards(processId: string, analyticalDashboardsId: string, analyticalDashboardsDto: any): Promise<any>;
    updateAnalyticalDashboardsIsDeleted(processId: string, analyticalDashboardsId: string): Promise<any>;
    updateAnalyticalDashboardsIsSoftDeleted(processId: string, analyticalDashboardsId: string): Promise<any>;
}
