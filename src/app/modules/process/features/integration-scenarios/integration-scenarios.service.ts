import { Injectable } from '@nestjs/common';
import {
  PROCESS,
  process_controls,
  process_controls_id,
} from '../../constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { findPath } from '../../utils/process.utils';
import { ProcessRepository } from '../../process.repository';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';

@Injectable()
export class ProcessControlsService {
  constructor(private readonly processRepository: ProcessRepository) {}

  //   async create(
  //     processId: string,
  //     updateIntegrationScenarioDto: UpdateIntegrationScenarioDto,
  //   ) {
  //     try {
  //       updateIntegrationScenarioDto._id = generateId(process_controls_id);

  //       const auditData = {
  //         last_modified_by: updateIntegrationScenarioDto.last_modified_by,
  //         last_modified_on: new Date(),
  //       };

  //       delete updateIntegrationScenarioDto.last_modified_by;
  //       const data = await this.processRepository.createByKey(
  //         processId,
  //         findPath(PROCESS, process_controls),
  //         updateIntegrationScenarioDto,
  //       );
  //       if (data._id === updateIntegrationScenarioDto._id) {
  //         const updateResponseDto = await this.processRepository.update(
  //           { _id: processId },
  //           auditData,
  //         );
  //         console.log('updateMetaData:', updateResponseDto);
  //       }

  //       return data;
  //     } catch (error) {
  //       console.error('Error in addWorkflows:', error);
  //       throw new Error(`Failed to add workflows: ${error.message}`);
  //     }
  //   }

  //   findAll() {
  //     return `This action returns all queriesResponses`;
  //   }

  //   findOne(id: number) {
  //     return `This action returns a #${id} queriesResponse`;
  //   }

  async update(
    processId: string,
    qrId: string,
    updateIntegrationScenarioDto: UpdateIntegrationScenarioDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: updateIntegrationScenarioDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete updateIntegrationScenarioDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, process_controls),
      qrId,
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

  //   async updatequeriesresponseIsDeleted(
  //     processId: string,
  //     qrId: string,
  //   ): Promise<any> {
  //     return this.processRepository.deleteByKey(
  //       processId,
  //       findPath(PROCESS, process_controls),
  //       qrId,
  //     );
  //   }

  //   async updateQueriesResponsesIsSoftDeleted(
  //     processId: string,
  //     workflowId: string,
  //   ): Promise<any> {
  //     return this.processRepository.softDeleteByKey(
  //       processId,
  //       findPath(PROCESS, process_controls),
  //       workflowId,
  //     );
  //   }
  //   remove(id: number) {
  //     return `This action removes a #${id} queriesResponse`;
  //   }
}
