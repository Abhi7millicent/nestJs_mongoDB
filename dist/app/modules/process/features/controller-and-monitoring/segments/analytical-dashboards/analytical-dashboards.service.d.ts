import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { AnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
export declare class AnalyticalDashboardsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateAnalyticalDashboards(processId: string, AnalyticalDashboardsId: string, analyticalDashboardsDto: AnalyticalDashboardsDto): Promise<any>;
    addAnalyticalDashboards(processId: string, analyticalDashboardsDto: AnalyticalDashboardsDto): Promise<any>;
    updateAnalyticalDashboardsIsDeleted(processId: string, AnalyticalDashboardsId: string): Promise<any>;
    updateAnalyticalDashboardsIsSoftDeleted(processId: string, AnalyticalDashboardsId: string): Promise<any>;
}
