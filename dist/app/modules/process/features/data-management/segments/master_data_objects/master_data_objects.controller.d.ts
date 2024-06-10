import { HttpStatus } from '@nestjs/common';
import { MDOService } from './master_data_objects.service';
import { MDODto } from './dto/master_data_objects';
export declare class MDOController {
    private readonly mdoService;
    constructor(mdoService: MDOService);
    addMDO(id: string, mdoDto: MDODto[]): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
    updateMDOIsDeleted(processId: string, mdoId: string): Promise<any>;
    updateMDOIsSoftDeleted(processId: string, mdoId: string): Promise<any>;
}
