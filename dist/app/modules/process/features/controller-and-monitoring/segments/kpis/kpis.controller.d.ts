import { KPIsService } from './kpis.service';
import { KPIsDto } from './dto/kpis.dto';
export declare class KPIsController {
    private readonly kpisService;
    constructor(kpisService: KPIsService);
    addKPIs(id: string, kpisDto: KPIsDto): Promise<any>;
    updateKPIs(processId: string, kpisId: string, kpisDto: any): Promise<any>;
    updateKPIsIsDeleted(processId: string, kpisId: string): Promise<any>;
    updateKPIsIsSoftDeleted(processId: string, kpisId: string): Promise<any>;
}
