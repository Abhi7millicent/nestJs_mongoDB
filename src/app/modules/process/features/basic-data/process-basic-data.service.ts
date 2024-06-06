import { Injectable } from '@nestjs/common';
import { ProcessBasicDataRepository } from '../../process.repository';
import { Process } from '../../process.schema';

@Injectable()
export class ProcessBasicDataService {
  constructor(
    private readonly processBasicDataRepository: ProcessBasicDataRepository,
  ) {}

  async createProcessBasicData(createProcessDto: Partial<Process>) {
    try {
      const createdProcess =
        await this.processBasicDataRepository.create(createProcessDto);
      return createdProcess;
    } catch (error) {
      throw new Error(`Error creating process: ${error}`);
    }
  }

  async getAllProcessBasicData() {
    const process = await this.processBasicDataRepository.findAll({
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
    return this.processBasicDataRepository.findById(id);
  }

  async updateProcessBasicData(
    id: string,
    data: Partial<Process>,
  ): Promise<any> {
    const updateResponse = await this.processBasicDataRepository.update(
      { _id: id },
      data,
    );
    return updateResponse;
  }

  async deleteProcessBasicData(id: string) {
    return this.processBasicDataRepository.delete(id);
  }

  async softDeleteProcessBasicData(id: string) {
    return this.processBasicDataRepository.softDelete(id);
  }
}
