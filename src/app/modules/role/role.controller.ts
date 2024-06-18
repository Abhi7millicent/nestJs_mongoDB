import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { RolesService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';
import { HttpResponse } from 'src/core/decorator/http-response-handler.decorator';

@Controller('v1/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @HttpResponse()
  //create role
  async create(@Body() createRoleDto: CreateRoleDto): Promise<any> {
    try {
      const data = await this.rolesService.create(createRoleDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'Role created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to create the Role');
      }
    }
  }

  @Get()
  @HttpResponse()
  async findAll(): Promise<any> {
    try {
      const data = await this.rolesService.findAll();
      return {
        statusCode: HttpStatus.OK,
        success: true,
        message: 'Role retrieved successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to retrieved the Role');
      }
    }
  }
}
