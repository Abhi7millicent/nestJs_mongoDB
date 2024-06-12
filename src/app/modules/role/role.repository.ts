import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GenericRepository } from 'src/core/repository/generic.repository';
import { Role } from './role.schema';

@Injectable()
export class RolesRepository extends GenericRepository<Role> {
  constructor(@InjectModel(Role.name) userModel: Model<Role>) {
    super(userModel);
  }
}
