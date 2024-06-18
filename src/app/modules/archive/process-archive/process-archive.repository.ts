import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProcessArchive } from './process-archive.schema';
import { GenericRepository } from 'src/core/repository/mongoose-repository/generic.repository';

@Injectable()
export class ProcessArchiveRepository extends GenericRepository<ProcessArchive> {
  constructor(
    @InjectModel(ProcessArchive.name) userModel: Model<ProcessArchive>,
  ) {
    super(userModel);
  }
}
