import { Injectable } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  ComplianceAndScenarios,
  Compliance_Scenarios_id,
} from '../../constant/compliance-scenarios.constant';
import { ComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';

@Injectable()
export class ComplianceScenariosDataService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateComplianceScenariosData(
    processId: string,
    complianceScenarioDataId: string,
    complianceScenarioDataDto: ComplianceScenarioDataDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: complianceScenarioDataDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete complianceScenarioDataDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['compliance_scenarios_data']),
      complianceScenarioDataId,
      complianceScenarioDataDto,
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

  async addComplianceScenariosData(
    processId: string,
    complianceScenarioDataDto: ComplianceScenarioDataDto,
  ): Promise<any> {
    try {
      complianceScenarioDataDto._id = generateId(Compliance_Scenarios_id);

      const auditData = {
        last_modified_by: complianceScenarioDataDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete complianceScenarioDataDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, ComplianceAndScenarios['compliance_scenarios_data']),
        complianceScenarioDataDto,
      );
      console.log('data:', data);
      if (data._id === complianceScenarioDataDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in add complianceScenarioData:', error);
      throw new Error(`Failed to add complianceScenarioData: ${error.message}`);
    }
  }

  async updateComplianceScenariosDataIsDeleted(
    processId: string,
    complianceScenarioDataId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['compliance_scenarios_data']),
      complianceScenarioDataId,
    );
  }

  async updateComplianceScenariosDataIsSoftDeleted(
    processId: string,
    complianceScenarioDataId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, ComplianceAndScenarios['compliance_scenarios_data']),
      complianceScenarioDataId,
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
