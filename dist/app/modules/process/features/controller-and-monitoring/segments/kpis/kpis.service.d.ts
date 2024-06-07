import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { KPIsDto } from './dto/kpis.dto';
export declare class KPIsService {
    private readonly processRepository;
    constructor(processRepository: ProcessRepository);
    updateKPIs(processId: string, kpisId: string, kpisDto: KPIsDto): Promise<any>;
    addKPIs(processId: string, kpisDto: KPIsDto): Promise<any>;
    updateKPIsIsDeleted(processId: string, kpisId: string): Promise<any>;
    updateKPIsIsSoftDeleted(processId: string, kpisId: string): Promise<any>;
}