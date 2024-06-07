import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  controlAndMonitoring,
  workflow,
} from '../../constant/controller-and-monitoring.constant';
import { AnalyticalDashboardsDto } from './dto/analytical-dashboards.dto';

@Injectable()
export class AnalyticalDashboardsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateAnalyticalDashboards(
    processId: string,
    AnalyticalDashboardsId: string,
    analyticalDashboardsDto: AnalyticalDashboardsDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: analyticalDashboardsDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete analyticalDashboardsDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['analytical_dashboards']),
      AnalyticalDashboardsId,
      analyticalDashboardsDto,
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

  async addAnalyticalDashboards(
    processId: string,
    analyticalDashboardsDto: AnalyticalDashboardsDto,
  ): Promise<any> {
    try {
      analyticalDashboardsDto._id = generateId(workflow);

      const auditData = {
        last_modified_by: analyticalDashboardsDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete analyticalDashboardsDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, controlAndMonitoring['analytical_dashboards']),
        analyticalDashboardsDto,
      );
      console.log('data:', data);
      if (data._id === analyticalDashboardsDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addAnalyticalDashboards:', error);
      throw new Error(`Failed to add AnalyticalDashboards: ${error.message}`);
    }
  }

  async updateAnalyticalDashboardsIsDeleted(
    processId: string,
    AnalyticalDashboardsId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['analytical_dashboards']),
      AnalyticalDashboardsId,
    );
  }

  async updateAnalyticalDashboardsIsSoftDeleted(
    processId: string,
    AnalyticalDashboardsId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['analytical_dashboards']),
      AnalyticalDashboardsId,
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
