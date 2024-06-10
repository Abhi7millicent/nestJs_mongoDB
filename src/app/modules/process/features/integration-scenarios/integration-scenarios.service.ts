import { Injectable } from '@nestjs/common';
import {
  PROCESS,
  integration_scenario,
} from '../../constant/process.constants';
import { findPath } from '../../utils/process.utils';
import { ProcessRepository } from '../../process.repository';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';

@Injectable()
export class IntegrationScenarioService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async update(
    processId: string,
    integrationScenarioId: string,
    updateIntegrationScenarioDto: UpdateIntegrationScenarioDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: updateIntegrationScenarioDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete updateIntegrationScenarioDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, integration_scenario),
      integrationScenarioId,
      updateIntegrationScenarioDto,
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
}
