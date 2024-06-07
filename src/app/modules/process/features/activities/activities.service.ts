import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath, generateId } from '../../utils/process.utils';
import { PROCESS } from '../../constant/process.constants';
import { ActivityDto } from './dto/activities.dto';
import { ProcessRepository } from '../../process.repository';

@Injectable()
export class ActivitiesService {
  constructor(private readonly processRepository: ProcessRepository) { }

  async updateActivity(
    processId: string,
    activityId: string,
    activityDto: ActivityDto,
  ): Promise<any> {
    const auditData = {
      last_modified_by: activityDto.last_modified_by,
      last_modified_on: new Date(),
    };
    delete activityDto.last_modified_by;
    const data = await this.processRepository.updateByKey(
      processId,
      findPath(PROCESS, 'activities'),
      activityId,
      activityDto,
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

  async updateActivityIsDeleted(
    processId: string,
    activityId: string,
  ): Promise<any> {
    return this.processRepository.deleteByKey(
      processId,
      findPath(PROCESS, 'activities'),
      activityId,
    );
  }

  async updateActivityIsSoftDeleted(
    processId: string,
    activityId: string,
  ): Promise<any> {
    return this.processRepository.softDeleteByKey(
      processId,
      findPath(PROCESS, 'activities'),
      activityId,
    );
  }

  async addActivity(processId: string, activityDto: ActivityDto): Promise<any> {
    activityDto._id = generateId('activity_');

    const auditData = {
      last_modified_by: activityDto.last_modified_by,
      last_modified_on: new Date(),
    };

    delete activityDto.last_modified_by;

    try {
      const data = await this.processRepository.createByKey(
        processId,
        findPath(PROCESS, 'activities'),
        activityDto,
      );

      if (data._id === activityDto._id) {
        const updateResponseDto = await this.processRepository.update(
          { _id: processId },
          auditData,
        );
        console.log('updateMetaData:', updateResponseDto);
      }

      return data;
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
