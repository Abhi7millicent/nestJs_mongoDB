import { Injectable } from '@nestjs/common';
import { QueriesResponseDto } from './dto/queries-response.dto';
import {
  PROCESS,
  queries_and_responses,
  queries_and_responses_id,
} from '../../constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessBasicDataRepository } from '../../process.repository';
import { findPath } from '../../utils/process.utils';

@Injectable()
export class QueriesResponsesService {
  constructor(
    private readonly processBasicDataRepository: ProcessBasicDataRepository,
  ) { }

  /**
   * This TypeScript function creates a new entry in a database collection, updates audit data, and
   * returns the created data.
   * @param {string} processId - The `processId` parameter is a string that represents the unique
   * identifier of a process. It is used to associate the data being created with a specific process in
   * the system.
   * @param {QueriesResponseDto} queriesResponseDto - The `queriesResponseDto` parameter is an object
   * that contains data related to queries and responses. It seems to have properties such as `_id`,
   * `last_modified_by`, and possibly other data specific to queries and responses. In the `create`
   * method, this object is being modified by generating an `_
   * @returns The `create` method is returning the `data` object after creating and updating the
   * queriesResponseDto in the database.
   */
  async create(processId: string, queriesResponseDto: QueriesResponseDto) {
    try {
      queriesResponseDto._id = generateId(queries_and_responses_id);

      const auditData = {
        last_modified_by: queriesResponseDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete queriesResponseDto.last_modified_by;
      const data = await this.processBasicDataRepository.createByKey(
        processId,
        findPath(PROCESS, queries_and_responses),
        queriesResponseDto,
      );
      if (data._id === queriesResponseDto._id) {
        const updateResponseDto = await this.processBasicDataRepository.update(
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

  /**
   * The update function in TypeScript updates a process's queries and responses data and audit
   * information.
   * @param {string} processId - The `processId` parameter is a string that represents the unique
   * identifier of a process in the system.
   * @param {string} qrId - The `qrId` parameter in the `update` function represents the unique
   * identifier of the queries and responses data that you want to update within a specific process. It
   * is used to identify the specific record that needs to be updated in the database.
   * @param {QueriesResponseDto} updateQueriesResponseDto - The `updateQueriesResponseDto` parameter is
   * an object of type `QueriesResponseDto` that contains information about the update queries
   * response. It likely includes data such as the last modified by user and other relevant details
   * related to the update operation.
   * @returns The `update` function returns either the `updateResponseDto` if the data was successfully
   * updated, or it returns the `data` object if the update was not acknowledged.
   */
  async update(
    processId: string,
    qrId: string,
    updateQueriesResponseDto: QueriesResponseDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: updateQueriesResponseDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete updateQueriesResponseDto.last_modified_by;
    const data = await this.processBasicDataRepository.updateByKey(
      processId,
      findPath(PROCESS, queries_and_responses),
      qrId,
      updateQueriesResponseDto,
    );
    if (data.acknowledged) {
      const updateResponseDto = await this.processBasicDataRepository.update(
        { _id: processId },
        auditData,
      );
      return updateResponseDto;
    } else {
      return data;
    }
  }

  /**
   * This function updates the queries and responses data by marking a specific entry as deleted.
   * @param {string} processId - The `processId` parameter is a string that represents the unique
   * identifier of a process.
   * @param {string} qrId - The `qrId` parameter in the `updatequeriesresponseIsDeleted` function
   * represents the unique identifier of a specific query or response that you want to delete from the
   * database.
   * @returns The `updatequeriesresponseIsDeleted` function is returning a Promise that resolves to the
   * result of calling the `deleteByKey` method on the `processBasicDataRepository` object. The
   * `deleteByKey` method is deleting a specific entry identified by the `processId` and `qrId`
   * parameters from a data repository.
   */
  async updatequeriesresponseIsDeleted(
    processId: string,
    qrId: string,
  ): Promise<any> {
    return this.processBasicDataRepository.deleteByKey(
      processId,
      findPath(PROCESS, queries_and_responses),
      qrId,
    );
  }


  /**
   * This function updates the isSoftDeleted property of queries and responses for a specific process and
   * workflow.
   * @param {string} processId - The `processId` parameter is a string that represents the unique
   * identifier of a process.
   * @param {string} workflowId - The `workflowId` parameter is a string that represents the unique
   * identifier of a workflow. It is used to identify a specific workflow within a process.
   * @returns The `updateQueriesResponsesIsSoftDeleted` function is returning the result of calling the
   * `softDeleteByKey` method on `processBasicDataRepository` with the provided `processId`, the result
   * of calling `findPath(PROCESS, queries_and_responses)`, and the `workflowId` as arguments.
   */
  async updateQueriesResponsesIsSoftDeleted(
    processId: string,
    workflowId: string,
  ): Promise<any> {
    return this.processBasicDataRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, queries_and_responses),
      workflowId,
    );
  }
  remove(id: number) {
    return `This action removes a #${id} queriesResponse`;
  }
}
