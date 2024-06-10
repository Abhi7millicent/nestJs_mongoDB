import { Injectable } from '@nestjs/common';
import { ProcessRepository } from './process.repository';
import { CreateProcessDto } from './dto/process.dto';
import { Process } from './process.schema';

@Injectable()
export class ProcessService {
  constructor(private readonly processRepository: ProcessRepository) {}

  // async createProcessBasicData(createProcessDto: any) {
  //   try {
  //     const createdProcess =
  //       await this.processRepository.create(createProcessDto);
  //     return createdProcess;
  //   } catch (error) {
  //     throw new Error(`Error creating process: ${error}`);
  //   }
  // }

  async createProcess(createProcessDto: CreateProcessDto): Promise<Process> {
    try {
      console.log('createProcessDto:', createProcessDto);
      const createdProcess =
        await this.processRepository.create(createProcessDto);
      return createdProcess;
    } catch (error) {
      // Handle error
      throw new Error('Failed to create process.');
    }
  }

  async getAllProcess() {
    const process = await this.processRepository.findAll({
      is_deleted: 'false',
    });
    process.forEach((process) => {
      process.activities = process.activities.filter(
        (activity) => activity.is_deleted === false,
      );
    });
    return process;
  }

  async getProcessById(id: string) {
    return this.processRepository.findById(id);
  }

  async deleteProcess(id: string) {
    return this.processRepository.delete(id);
  }

  async softDeleteProcess(id: string) {
    return this.processRepository.softDelete(id);
  }
}
