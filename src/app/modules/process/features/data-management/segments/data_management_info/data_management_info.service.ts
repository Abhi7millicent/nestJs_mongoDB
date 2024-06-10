import { Injectable } from '@nestjs/common';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { DataManagementDto } from './dto/data_management_info.dto';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';

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
      findPath(PROCESS, 'data_management_info'),
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
