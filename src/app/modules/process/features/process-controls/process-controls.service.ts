import { Injectable, NotFoundException } from '@nestjs/common';
import {
  ProcessControlsDto,
  UpsertProcessControlsDto,
} from './dto/process-controls.dto';
import {
  PROCESS,
  process_controls,
  process_controls_id,
} from '../../constant/process.constants';
import { findPath, generateId } from '../../helper/process.utils';
import { ProcessRepository } from '../../process.repository';

@Injectable()
export class ProcessControlsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async getByProcessById(processId: string): Promise<any> {
    return this.processRepository.findById(processId);
  }

  async upsert(
    createProcessControlsDto: UpsertProcessControlsDto,
  ): Promise<any> {
    const processId = createProcessControlsDto._id;
    const processControlsDto = createProcessControlsDto.process_controls;
    const auditData = {
      last_modified_by: processControlsDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const processToCreate = processControlsDto.filter(
      (activityDto) => !activityDto._id,
    );
    const processToUpdate = processControlsDto.filter(
      (activityDto) => activityDto._id,
    );

    processToCreate.forEach((activityDto) => {
      activityDto._id = generateId('pc_');
      delete activityDto.last_modified_by;
    });

    try {
      const createPromises = processToCreate.map((activityDto) =>
        this.processRepository.createByKey(
          processId,
          findPath(PROCESS, process_controls),
          activityDto,
        ),
      );

      const updatePromises = processToUpdate.map((activityDto) =>
        this.update(processId, activityDto._id, activityDto),
      );

      const createResults = await Promise.all(createPromises);
      const updateResults = await Promise.all(updatePromises);

      const allInsertionsSuccessful = createResults.every(
        (data, index) => data._id === processToCreate[index]._id,
      );

      if (
        allInsertionsSuccessful ||
        updateResults.every((result) => result.acknowledged)
      ) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return {
        created: createResults,
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

  // async create(processId: string, processControlsDto: ProcessControlsDto) {
  //   try {
  //     processControlsDto._id = generateId(process_controls_id);

  //     const auditData = {
  //       last_modified_by: processControlsDto.last_modified_by,
  //       last_modified_on: new Date(),
  //     };

  //     delete processControlsDto.last_modified_by;
  //     const data = await this.processRepository.createByKey(
  //       processId,
  //       findPath(PROCESS, process_controls),
  //       processControlsDto,
  //     );
  //     if (data._id === processControlsDto._id) {
  //       const updateResponseDto = await this.processRepository.update(
  //         { _id: processId },
  //         auditData,
  //       );
  //       console.log('updateMetaData:', updateResponseDto);
  //     }

  //     return data;
  //   } catch (error) {
  //     console.error('Error in addWorkflows:', error);
  //     throw new Error(`Failed to add workflows: ${error.message}`);
  //   }
  // }

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
