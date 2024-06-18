import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from './role.schema';
import { CreateRoleDto } from './dto/role.dto';
import { RolesRepository } from './role.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: RolesRepository) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    try {
      return this.rolesRepository.create(createRoleDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Role[]> {
    try {
      return this.rolesRepository.findAll();
    } catch (error) {
      throw error;
    }
  }
}
