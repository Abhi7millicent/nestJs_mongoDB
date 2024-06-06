import { Injectable } from '@nestjs/common';
import { ProcessRepository } from '../../process.repository';
import { Process } from '../../process.schema';

@Injectable()
export class BasicDataService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async createProcessBasicData(createProcessDto: Partial<Process>) {
    try {
      const createdProcess =
        await this.processRepository.create(createProcessDto);
      return createdProcess;
    } catch (error) {
      throw new Error(`Error creating process: ${error}`);
    }
  }

  async getAllProcessBasicData() {
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

  async getProcessBasicDataById(id: string) {
    return this.processRepository.findById(id);
  }

  async updateProcessBasicData(
    id: string,
    data: Partial<Process>,
  ): Promise<any> {
    const updateResponse = await this.processRepository.update(
      { _id: id },
      data,
    );
    return updateResponse;
  }

  async deleteProcessBasicData(id: string) {
    return this.processRepository.delete(id);
  }

  async softDeleteProcessBasicData(id: string) {
    return this.processRepository.softDelete(id);
  }
}
