import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GenericRepository } from 'src/core/repository/generic.repository';
import { Process } from './process.schema';

@Injectable()
export class ProcessRepository extends GenericRepository<Process> {
  constructor(@InjectModel(Process.name) userModel: Model<Process>) {
    super(userModel);
  }
}
