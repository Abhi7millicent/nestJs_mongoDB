import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  controlAndMonitoring,
  workflow,
} from '../../constant/controller-and-monitoring.constant';
import { ReportsDto } from './dto/reports.dto';

@Injectable()
export class ReportsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateReports(
    processId: string,
    reportId: string,
    reportsDto: ReportsDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: reportsDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete reportsDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['reports']),
      reportId,
      reportsDto,
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

  async addReports(processId: string, reportsDto: ReportsDto): Promise<any> {
    try {
      reportsDto._id = generateId(workflow);

      const auditData = {
        last_modified_by: reportsDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete reportsDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, controlAndMonitoring['reports']),
        reportsDto,
      );
      console.log('data:', data);
      if (data._id === reportsDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addReport:', error);
      throw new Error(`Failed to add Report: ${error.message}`);
    }
  }

  async updateReportsIsDeleted(
    processId: string,
    reportId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['reports']),
      reportId,
    );
  }

  async updateReportsIsSoftDeleted(
    processId: string,
    reportId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['reports']),
      reportId,
    );
  }

  // async addWorkflows(processId: string, reportsDto: reportsDto): Promise<ProcessBasicData> {
  //     reportsDto._id = 'wf_' + Math.random().toString(36).substring(2, 11);
  //     const process = await this.processRepository.findById(processId);
  //     if (!process) {
  //       throw new Error('Process not found');
  //     }
  //     process.control_and_monitoring.workflows.push(reportsDto);
  //     process.markModified('control_and_monitoring');
  //     process.last_modified_by = "Editor";
  //     process.last_modified_on = new Date;
  //     return process.save();
  // }
}
