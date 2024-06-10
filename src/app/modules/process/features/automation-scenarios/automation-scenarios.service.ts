import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath, generateId } from '../../utils/process.utils';
import { PROCESS } from '../../constant/process.constants';
import { ProcessRepository } from '../../process.repository';
import { AutomationScenarioDto } from './dto/automation-scenarios.dto';

@Injectable()
export class AutomationScenarioService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async updateAutomationScenario(
    processId: string,
    automationScenarioId: string,
    automationScenarioDto: AutomationScenarioDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: automationScenarioDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete automationScenarioDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, 'automation_scenarios'),
      automationScenarioId,
      automationScenarioDto,
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

  async updateAutomationScenarioIsDeleted(
    processId: string,
    automationScenarioId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, 'automation_scenarios'),
      automationScenarioId,
    );
  }

  async updateAutomationScenarioIsSoftDeleted(
    processId: string,
    automationScenarioId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, 'automation_scenarios'),
      automationScenarioId,
    );
  }

  async addAutomationScenario(
    processId: string,
    automationScenarioDto: AutomationScenarioDto[],
  ): Promise<any> {
    const auditData = {
      last_modified_by: automationScenarioDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    const automationScenarioToCreate = automationScenarioDto.filter(
      (automationDto) => !automationDto._id,
    );
    const automationScenarioToUpdate = automationScenarioDto.filter(
      (automationDto) => automationDto._id,
    );

    automationScenarioToCreate.forEach((automationDto) => {
      automationDto._id = generateId('as_');
      delete automationDto.last_modified_by;
    });

    try {
      const createPromises = automationScenarioToCreate.map((automationDto) =>
        this.processRepository.createByKey(
          processId,
          findPath(PROCESS, 'automation_scenarios'),
          automationDto,
        ),
      );

      const updatePromises = automationScenarioToUpdate.map((automationDto) =>
        this.updateAutomationScenario(
          processId,
          automationDto._id,
          automationDto,
        ),
      );

      const createResults = await Promise.all(createPromises);
      const updateResults = await Promise.all(updatePromises);

      const allInsertionsSuccessful = createResults.every(
        (data, index) => data._id === automationScenarioToCreate[index]._id,
      );

      if (
        allInsertionsSuccessful ||
        updateResults.every((result) => result.acknowledged)
      ) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return {
        created: createResults,
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
}
