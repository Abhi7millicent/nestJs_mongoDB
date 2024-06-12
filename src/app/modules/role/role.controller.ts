import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Role } from './role.schema';
import { RolesService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';

@Controller('v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }
}
