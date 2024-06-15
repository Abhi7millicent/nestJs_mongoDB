import { BasicDataService } from './basic-data.service';
import { Process } from '../../process.schema';
export declare class BasicDataController {
    private readonly basicDataService;
    constructor(basicDataService: BasicDataService);
    update(id: string, data: Partial<Process>): Promise<any>;
}
