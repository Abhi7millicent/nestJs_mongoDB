import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './role.schema';
import { GenericRepository } from 'src/core/repository/mongoose-repository/generic.repository';

@Injectable()
export class RolesRepository extends GenericRepository<Role> {
  constructor(@InjectModel(Role.name) userModel: Model<Role>) {
    super(userModel);
  }
}
