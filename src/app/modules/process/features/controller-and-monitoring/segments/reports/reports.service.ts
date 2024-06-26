import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/helper/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  controlAndMonitoring,
  reports,
} from '../../constant/controller-and-monitoring.constant';
import { ReportsDto, UpsertReportsDto } from './dto/reports.dto';
import { generateId } from 'src/common/helpers/string.helper';

@Injectable()
export class ReportsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async getByProcessById(processId: string): Promise<any> {
    return this.processRepository.findById(processId);
  }

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

  // async addReports(processId: string, reportsDto: ReportsDto): Promise<any> {
  //   try {
  //     reportsDto._id = generateId(reports);

  //     const auditData = {
  //       last_modified_by: reportsDto.last_modified_by,
  //       last_modified_on: new Date(),
  //     };

  //     delete reportsDto.last_modified_by;
  //     const data = await this.processRepository.createByKey(
  //       processId,
  //       findPath(PROCESS, controlAndMonitoring['reports']),
  //       reportsDto,
  //     );
  //     console.log('data:', data);
  //     if (data._id === reportsDto._id) {
  //       const updateResponseDto = await this.processRepository.update(
  //         { _id: processId },
  //         auditData,
  //       );
  //       console.log('updateMetaData:', updateResponseDto);
  //     }

  //     return data;
  //   } catch (error) {
  //     console.error('Error in addReport:', error);
  //     throw new Error(`Failed to add Report: ${error.message}`);
  //   }
  // }

  async Upsert(createReportsDto: UpsertReportsDto): Promise<any> {
    const processId = createReportsDto._id;
    const reportsDto = createReportsDto.reports;
    const auditData = {
      last_modified_by: reportsDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const reportsToCreate = reportsDto.filter((dataDto) => !dataDto._id);
    const reportsToUpdate = reportsDto.filter((dataDto) => dataDto._id);

    let createdData = [];

    for (const dataDto of reportsToCreate) {
      dataDto._id = generateId(reports);
      delete dataDto.last_modified_by;

      const value = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, controlAndMonitoring['reports']),
        dataDto,
      );
      createdData.push(value);
    }

    try {
      const updatePromises = reportsToUpdate.map((dataDto) =>
        this.updateReports(processId, dataDto._id, dataDto),
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
