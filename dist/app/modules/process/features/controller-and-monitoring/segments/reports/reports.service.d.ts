import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { ReportsDto } from './dto/reports.dto';
export declare class ReportsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateReports(processId: string, reportId: string, reportsDto: ReportsDto): Promise<any>;
    addReports(processId: string, reportsDto: ReportsDto): Promise<any>;
    updateReportsIsDeleted(processId: string, reportId: string): Promise<any>;
    updateReportsIsSoftDeleted(processId: string, reportId: string): Promise<any>;
}
