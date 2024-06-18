import { Injectable, NotFoundException } from '@nestjs/common';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/string.helper';
import { data_management_info } from '../../constant/data-management.constant';
import { MDODto, UpsertMDODto } from './dto/master_data_objects';

@Injectable()
export class MDOService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateMDO(
    processId: string,
    mdoId: string,
    mdoDto: MDODto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: mdoDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete mdoDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, 'master_data_objects'),
      mdoId,
      mdoDto,
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

  async updateMDOIsDeleted(processId: string, mdoId: string): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, 'master_data_objects'),
      mdoId,
    );
  }

  async updateMDOIsSoftDeleted(processId: string, mdoId: string): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, 'master_data_objects'),
      mdoId,
    );
  }

  async upsertMDO(createMDODto: UpsertMDODto): Promise<any> {
    const processId = createMDODto._id;
    const mdoDto = createMDODto.mdo;
    const auditData = {
      last_modified_by: mdoDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const mdoToCreate = mdoDto.filter((dataDto) => !dataDto._id);
    const mdoToUpdate = mdoDto.filter((dataDto) => dataDto._id);

    let createdData = [];

    for (const dataDto of mdoToCreate) {
      dataDto._id = generateId('mdo_');
      delete dataDto.last_modified_by;

      const value = this.processRepository.createByKey(
        processId,
        findPath(PROCESS, 'master_data_objects'),
        dataDto,
      );
      createdData.push(value);
      console.log('createdData:', createdData);
    }

    try {
      const updatePromises = mdoToUpdate.map((dataDto) =>
        this.updateMDO(processId, dataDto._id, dataDto),
      );
      const updateResults = await Promise.all(updatePromises);

      if (updateResults.every((result) => result.acknowledged)) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return {
        created: createdData,
        updated: updateResults,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        console.error('Not Found Exception:', error.message);
        throw error;
      } else {
        console.error('Unexpected Error:', error.message);
        throw error;
      }
    }
  }
}
