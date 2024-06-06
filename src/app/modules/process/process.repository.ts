import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProcessBasicData } from './process.basic.data.schema';
import { GenericRepository } from 'src/core/repository/generic.repository';

@Injectable()
export class ProcessBasicDataRepository extends GenericRepository<ProcessBasicData> {
  constructor(
    @InjectModel(ProcessBasicData.name) userModel: Model<ProcessBasicData>,
  ) {
    super(userModel);
  }
}
