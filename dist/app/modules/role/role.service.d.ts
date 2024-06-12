import { Role } from './role.schema';
import { CreateRoleDto } from './dto/role.dto';
import { RolesRepository } from './role.repository';
export declare class RolesService {
    private readonly rolesRepository;
    constructor(rolesRepository: RolesRepository);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
}
