import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from './role.schema';
import { CreateRoleDto } from './dto/role.dto';
import { RolesRepository } from './role.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesRepository.create(createRoleDto);
  }

  async findAll(): Promise<Role[]> {
    return this.rolesRepository.findAll();
  }
}
