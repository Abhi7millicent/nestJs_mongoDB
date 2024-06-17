import { RolesService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<any>;
    findAll(): Promise<any>;
}
