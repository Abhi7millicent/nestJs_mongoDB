import { Injectable } from '@nestjs/common';
import { ProcessControlsDto } from './dto/process-controls.dto';
import {
  PROCESS,
  process_controls,
  process_controls_id,
} from '../../constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { findPath } from '../../utils/process.utils';
import { ProcessRepository } from '../../process.repository';

@Injectable()
export class ProcessControlsService {
  constructor(private readonly processRepository: ProcessRepository) { }


  async create(processId: string, processControlsDto: ProcessControlsDto) {
    try {
      processControlsDto._id = generateId(process_controls_id);

      const auditData = {
        last_modified_by: processControlsDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete processControlsDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, process_controls),
        processControlsDto,
      );
      if (data._id === processControlsDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addWorkflows:', error);
      throw new Error(`Failed to add workflows: ${error.message}`);
    }
  }

  findAll() {
    return `This action returns all queriesResponses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queriesResponse`;
  }


  async update(
    processId: string,
    qrId: string,
    updateprocessControlsDto: ProcessControlsDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: updateprocessControlsDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete updateprocessControlsDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, process_controls),
      qrId,
      updateprocessControlsDto,
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


  async updatequeriesresponseIsDeleted(
    processId: string,
    qrId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, process_controls),
      qrId,
    );
  }


  async updateQueriesResponsesIsSoftDeleted(
    processId: string,
    workflowId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, process_controls),
      workflowId,
    );
  }
  remove(id: number) {
    return `This action removes a #${id} queriesResponse`;
  }
}
