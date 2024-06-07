import { BasicDataService } from './basic-data.service';
import { Process } from '../../process.schema';
export declare class BasicDataController {
    private readonly basicDataService;
    constructor(basicDataService: BasicDataService);
    create(createProcessDto: Process): Promise<Process>;
    getAll(): Promise<Process[]>;
    getById(id: string): Promise<Process>;
    update(id: string, data: Partial<Process>): Promise<Process>;
    delete(id: string): Promise<Process>;
}
