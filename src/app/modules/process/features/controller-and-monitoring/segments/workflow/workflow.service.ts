import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { WorkflowsDto } from './dto/workflows.dto';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  controlAndMonitoring,
  workflow,
} from '../../constant/controller-and-monitoring.constant';

@Injectable()
export class WorkflowsService {
  constructor(private readonly processRepository: ProcessRepository) { }

  async updateWorkflow(
    processId: string,
    workflowId: string,
    workflowsDto: WorkflowsDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: workflowsDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete workflowsDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['workflows']),
      workflowId,
      workflowsDto,
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

  async addWorkflows(
    processId: string,
    workflowsDto: WorkflowsDto,
  ): Promise<any> {
    try {
      workflowsDto._id = generateId(workflow);

      const auditData = {
        last_modified_by: workflowsDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete workflowsDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, controlAndMonitoring['workflows']),
        workflowsDto,
      );
      console.log('data:', data);
      if (data._id === workflowsDto._id) {
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

  async updateWorkflowsIsDeleted(
    processId: string,
    workflowId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['workflows']),
      workflowId,
    );
  }

  async updateWorkflowsIsSoftDeleted(
    processId: string,
    workflowId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['workflows']),
      workflowId,
    );
  }

  // async addWorkflows(processId: string, workflowsDto: WorkflowsDto): Promise<ProcessBasicData> {
  //     workflowsDto._id = 'wf_' + Math.random().toString(36).substring(2, 11);
  //     const process = await this.processRepository.findById(processId);
  //     if (!process) {
  //       throw new Error('Process not found');
  //     }
  //     process.control_and_monitoring.workflows.push(workflowsDto);
  //     process.markModified('control_and_monitoring');
  //     process.last_modified_by = "Editor";
  //     process.last_modified_on = new Date;
  //     return process.save();
  // }
}
