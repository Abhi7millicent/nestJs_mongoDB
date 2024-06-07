import { Injectable, NotFoundException } from '@nestjs/common';
import { ProcessBasicDataRepository } from '../../process.repository';
import { findPath, generateId } from '../../utils/process.utils';
import { PROCESS } from '../../constant/process.constants';
import { ActivityDto } from './dto/activities.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly processBasicDataRepository: ProcessBasicDataRepository,
  ) {}

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
    const data = await this.processBasicDataRepository.updateByKey(
      processId,
      findPath(PROCESS, 'activities'),
      activityId,
      activityDto,
    );
    if (data.acknowledged) {
      const updateResponseDto = await this.processBasicDataRepository.update(
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
    return this.processBasicDataRepository.deleteByKey(
      processId,
      findPath(PROCESS, 'activities'),
      activityId,
    );
  }

  async updateActivityIsSoftDeleted(
    processId: string,
    activityId: string,
  ): Promise<any> {
    return this.processBasicDataRepository.softDeleteByKey(
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
      const data = await this.processBasicDataRepository.createByKey(
        processId,
        findPath(PROCESS, 'activities'),
        activityDto,
      );

      if (data._id === activityDto._id) {
        const updateResponseDto = await this.processBasicDataRepository.update(
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
