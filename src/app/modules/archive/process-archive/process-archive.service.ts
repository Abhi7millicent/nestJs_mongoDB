import { Injectable, NotFoundException } from '@nestjs/common';
import { ProcessArchiveRepository } from './process-archive.repository';
import { ProcessArchive } from './process-archive.schema';
import { CreateProcessArchiveDto } from './dto/process-archive.dto';

@Injectable()
export class ProcessArchiveService {
  constructor(
    private readonly processArchiveRepository: ProcessArchiveRepository,
  ) {}

  async findAll(): Promise<ProcessArchive[]> {
    return this.processArchiveRepository.findAll();
  }

  async findById(id: string): Promise<ProcessArchive> {
    const processArchive = await this.processArchiveRepository.findById(id);
    if (!processArchive) {
      throw new NotFoundException(`Process Archive with ID ${id} not found`);
    }
    return processArchive;
  }

  async create(data: any): Promise<any> {
    try {
      console.log('data:', data);
      const createProcessArchiveDto: CreateProcessArchiveDto = {
        process: data,
        deleted_at: new Date(),
      };

      console.log('createProcessArchiveDto', createProcessArchiveDto);

      const createdProcessArchive = await this.processArchiveRepository.create(
        createProcessArchiveDto,
      );
      return createdProcessArchive;
    } catch (error) {
      throw new Error(`Failed to create process archive: ${error.message}`);
    }
  }
}
