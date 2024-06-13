import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  AuditTrailScenariosDto,
  UpsertAuditTrailScenariosDto,
} from './dto/audit-trail.dto';
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
      findPath(PROCESS, ComplianceAndScenarios['audit_trail_scenarios']),
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

  async upsertAuditTrailScenarios(
    createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto,
  ): Promise<any> {
    const processId = createAuditTrailScenariosDto._id;
    const auditTrailScenariosDto =
      createAuditTrailScenariosDto.audit_trail_scenarios;
    const auditData = {
      last_modified_by: auditTrailScenariosDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const auditTrailScenariosToCreate = auditTrailScenariosDto.filter(
      (dataDto) => !dataDto._id,
    );
    const auditTrailScenariosToUpdate = auditTrailScenariosDto.filter(
      (dataDto) => dataDto._id,
    );

    let createdData = [];

    for (const dataDto of auditTrailScenariosToCreate) {
      dataDto._id = generateId(audit_trail_id);
      delete dataDto.last_modified_by;

      const value = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, ComplianceAndScenarios['audit_trail_scenarios']),
        dataDto,
      );
      createdData.push(value);
    }

    try {
      const updatePromises = auditTrailScenariosToUpdate.map((automationDto) =>
        this.updateAuditTrailScenarios(
          processId,
          automationDto._id,
          automationDto,
        ),
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

  async updateAuditTrailScenariosIsDeleted(
    processId: string,
    AuditTrailScenariosId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['audit_trail_scenarios']),
      AuditTrailScenariosId,
    );
  }

  async updateAuditTrailScenariosIsSoftDeleted(
    processId: string,
    AuditTrailScenariosId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['audit_trail_scenarios']),
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
