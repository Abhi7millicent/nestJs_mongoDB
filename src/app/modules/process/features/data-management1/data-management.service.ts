import { Injectable } from '@nestjs/common';
import {
  PROCESS,
  data_management,
  integration_scenario,
} from '../../constant/process.constants';
import { findPath } from '../../utils/process.utils';
import { ProcessRepository } from '../../process.repository';
import { DataManagementDto } from './dto/data-management.dto';

@Injectable()
export class DataManagementService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async update(
    processId: string,
    dataManagementId: string,
    dataManagementDto: DataManagementDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: dataManagementDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete dataManagementDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, data_management),
      dataManagementId,
      dataManagementDto,
    );
    if (data.acknowledged) {
      const updateResponseDto = await this.processRepository.update(
        { _id: processId },
        auditData,
      );
      return updateResponseDto;
    } else {
      return data;
    }
  }
}
