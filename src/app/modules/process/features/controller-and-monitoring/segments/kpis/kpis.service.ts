import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  controlAndMonitoring,
  workflow,
} from '../../constant/controller-and-monitoring.constant';
import { KPIsDto } from './dto/kpis.dto';

@Injectable()
export class KPIsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateKPIs(
    processId: string,
    kpisId: string,
    kpisDto: KPIsDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: kpisDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete kpisDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['kpis']),
      kpisId,
      kpisDto,
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

  async addKPIs(processId: string, kpisDto: KPIsDto): Promise<any> {
    try {
      kpisDto._id = generateId(workflow);

      const auditData = {
        last_modified_by: kpisDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete kpisDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, controlAndMonitoring['kpis']),
        kpisDto,
      );
      console.log('data:', data);
      if (data._id === kpisDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addkpis:', error);
      throw new Error(`Failed to add kpis: ${error.message}`);
    }
  }

  async updateKPIsIsDeleted(processId: string, kpisId: string): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['kpis']),
      kpisId,
    );
  }

  async updateKPIsIsSoftDeleted(
    processId: string,
    kpisId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, controlAndMonitoring['kpis']),
      kpisId,
    );
  }

  // async addWorkflows(processId: string, kpisDto: kpisDto): Promise<ProcessBasicData> {
  //     kpisDto._id = 'wf_' + Math.random().toString(36).substring(2, 11);
  //     const process = await this.processRepository.findById(processId);
  //     if (!process) {
  //       throw new Error('Process not found');
  //     }
  //     process.control_and_monitoring.workflows.push(kpisDto);
  //     process.markModified('control_and_monitoring');
  //     process.last_modified_by = "Editor";
  //     process.last_modified_on = new Date;
  //     return process.save();
  // }
}
