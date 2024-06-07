import { Injectable } from '@nestjs/common';
import { ProcessDocumentDto } from './dto/process-document.dto';
import {
  PROCESS,
  process_document,
  process_document_id,
} from '../../constant/process.constants';
import { generateId } from 'src/shared/helper/generate-id.helper';
import { ProcessRepository } from '../../process.repository';
import { findPath } from '../../utils/process.utils';

@Injectable()
export class ProcessDocumentService {
  constructor(private readonly processRepository: ProcessRepository) { }

  async create(processId: string, processDocumentDto: ProcessDocumentDto) {
    try {
      processDocumentDto._id = generateId(process_document_id);

      const auditData = {
        last_modified_by: processDocumentDto.last_modified_by,
        last_modified_on: new Date(),
      };

      delete processDocumentDto.last_modified_by;
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, process_document),
        processDocumentDto,
      );
      if (data._id === processDocumentDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
    } catch (error) {
      console.error('Error in addWorkflows:', error);
      throw new Error(`Failed to add workflows: ${error.message}`);
    }
  }

  findAll() {
    return `This action returns all processDocument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} processDocument`;
  }

  // update(id: number, updateProcessDocumentDto: UpdateProcessDocumentDto) {
  //   return `This action updates a #${id} processDocument`;
  // }
  async updateProcessDocument(
    processId: string,
    pdId: string,
    updateProcessDocumentDto: ProcessDocumentDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: updateProcessDocumentDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete updateProcessDocumentDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, process_document),
      pdId,
      updateProcessDocumentDto,
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

  async updateProcessDocumentIsDeleted(
    processId: string,
    pdId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, process_document),
      pdId,
    );
  }

  async updateProcessDocumentsIsSoftDeleted(
    processId: string,
    pdId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, process_document),
      pdId,
    );
  }
  remove(id: number) {
    return `This action removes a #${id} processDocument`;
  }
}
