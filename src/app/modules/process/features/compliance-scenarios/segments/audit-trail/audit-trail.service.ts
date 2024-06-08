import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import { AuditTrailScenariosDto } from './dto/audit-trail.dto';
import {
  ComplianceAndScenarios,
  audit_trail_id,
} from '../../constant/compliance-scenarios.constant';

@Injectable()
export class AuditTrailScenariosService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateAuditTrailScenarios(
    processId: string,
    AuditTrailScenariosId: string,
    auditTrailScenariosDto: AuditTrailScenariosDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: auditTrailScenariosDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete auditTrailScenariosDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['audit_trail']),
      AuditTrailScenariosId,
      auditTrailScenariosDto,
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

  async addAuditTrailScenarios(
    processId: string,
    auditTrailScenariosDto: AuditTrailScenariosDto,
  ): Promise<any> {
    try {
      auditTrailScenariosDto._id = generateId(audit_trail_id);

      const auditData = {
        last_modified_by: auditTrailScenariosDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete auditTrailScenariosDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, ComplianceAndScenarios['audit_trail']),
        auditTrailScenariosDto,
      );
      console.log('data:', data);
      if (data._id === auditTrailScenariosDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addAuditTrailScenarios:', error);
      throw new Error(`Failed to add AuditTrailScenarios: ${error.message}`);
    }
  }

  async updateAuditTrailScenariosIsDeleted(
    processId: string,
    AuditTrailScenariosId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['audit_trail']),
      AuditTrailScenariosId,
    );
  }

  async updateAuditTrailScenariosIsSoftDeleted(
    processId: string,
    AuditTrailScenariosId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['audit_trail']),
      AuditTrailScenariosId,
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
