import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Process } from './process.schema';
import { GenericRepository } from 'src/core/repository/mongoose-repository/generic.repository';

@Injectable()
export class ProcessRepository extends GenericRepository<Process> {
  constructor(@InjectModel(Process.name) userModel: Model<Process>) {
    super(userModel);
  }
}
