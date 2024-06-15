import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { AnalyticalDashboardsDto, UpsertAnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';
export declare class AnalyticalDashboardsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    getByProcessById(processId: string): Promise<any>;
    updateAnalyticalDashboards(processId: string, AnalyticalDashboardsId: string, analyticalDashboardsDto: AnalyticalDashboardsDto): Promise<any>;
    Upsert(createAnalyticalDashboardsDto: UpsertAnalyticalDashboardsDto): Promise<any>;
    updateAnalyticalDashboardsIsDeleted(processId: string, AnalyticalDashboardsId: string): Promise<any>;
    updateAnalyticalDashboardsIsSoftDeleted(processId: string, AnalyticalDashboardsId: string): Promise<any>;
}
