import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath } from 'src/app/modules/process/utils/process.utils';
import { PROCESS } from 'src/app/modules/process/constant/process.constants';
import { generateId } from 'src/shared/helper/string.helper';
import { ProcessRepository } from 'src/app/modules/process/process.repository';
import {
  ComplianceAndScenarios,
  Compliance_Scenarios_id,
} from '../../constant/compliance-scenarios.constant';
import {
  ComplianceScenarioDataDto,
  UpsertComplianceScenarioDataDto,
} from './dto/compliance-scenarios-data.dto';

@Injectable()
export class ComplianceScenariosDataService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async getByProcessById(processId: string): Promise<any> {
    return this.processRepository.findById(processId);
  }

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

  async upsertComplianceScenariosData(
    createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto,
  ): Promise<any> {
    const processId = createComplianceScenarioDataDto._id;
    const complianceScenarioDataDto =
      createComplianceScenarioDataDto.compliance_scenario;
    const auditData = {
      last_modified_by: complianceScenarioDataDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const complianceScenariosToCreate = complianceScenarioDataDto.filter(
      (dataDto) => !dataDto._id,
    );
    const complianceScenariosToUpdate = complianceScenarioDataDto.filter(
      (dataDto) => dataDto._id,
    );

    let createdData = [];

    for (const dataDto of complianceScenariosToCreate) {
      dataDto._id = generateId(Compliance_Scenarios_id);
      delete dataDto.last_modified_by;

      const value = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, ComplianceAndScenarios['compliance_scenarios_data']),
        dataDto,
      );
      createdData.push(value);
    }

    try {
      const updatePromises = complianceScenariosToUpdate.map((automationDto) =>
        this.updateComplianceScenariosData(
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
