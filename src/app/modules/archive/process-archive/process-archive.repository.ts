import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GenericRepository } from 'src/core/repository/generic.repository';
import { ProcessArchive } from './process-archive.schema';

@Injectable()
export class ProcessArchiveRepository extends GenericRepository<ProcessArchive> {
  constructor(
    @InjectModel(ProcessArchive.name) userModel: Model<ProcessArchive>,
  ) {
    super(userModel);
  }
}
