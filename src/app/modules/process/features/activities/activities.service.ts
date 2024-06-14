import { Injectable, NotFoundException } from '@nestjs/common';
import { findPath, generateId } from '../../utils/process.utils';
import { PROCESS } from '../../constant/process.constants';
import { ActivityDto, UpsertActivityDto } from './dto/activities.dto';
import { ProcessRepository } from '../../process.repository';

@Injectable()
export class ActivitiesService {
  constructor(private readonly processRepository: ProcessRepository) {}

  async getByProcessById(processId: string): Promise<any> {
    return this.processRepository.findById(processId);
  }

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

  // async addActivity(processId: string, activityDto: ActivityDto[]): Promise<any> {
  //   activityDto._id = generateId('activity_');

  //   const auditData = {
  //     last_modified_by: activityDto.last_modified_by,
  //     last_modified_on: new Date(),
  //   };

  //   delete activityDto.last_modified_by;

  //   try {
  //     const data = await this.processRepository.createByKey(
  //       processId,
  //       findPath(PROCESS, 'activities'),
  //       activityDto,
  //     );

  //     if (data._id === activityDto._id) {
  //       const updateResponseDto = await this.processRepository.update(
  //         { _id: processId },
  //         auditData,
  //       );
  //       console.log('updateMetaData:', updateResponseDto);
  //     }

  //     return data;
  //   } catch (error) {
  //     if (error instanceof NotFoundException) {
  //       console.error('Not Found Exception:', error.message);
  //       throw error;
  //     } else {
  //       console.error('Unexpected Error:', error.message);
  //       throw error;
  //     }
  //   }
  // }

  async Upsert(
    // processId: string,
    createActivityDto: UpsertActivityDto,
  ): Promise<any> {
    const processId = createActivityDto._id;
    const activitiesDto = createActivityDto.activity;
    const auditData = {
      last_modified_by: activitiesDto[0].last_modified_by,
      last_modified_on: new Date(),
    };

    // Prepare the activities
    const activitiesToCreate = activitiesDto.filter(
      (activityDto) => !activityDto._id,
    );
    const activitiesToUpdate = activitiesDto.filter(
      (activityDto) => activityDto._id,
    );

    // Assign IDs to new activities
    activitiesToCreate.forEach((activityDto) => {
      activityDto._id = generateId('activity_');
      delete activityDto.last_modified_by;
    });

    try {
      // Create new activities
      const createPromises = activitiesToCreate.map((activityDto) =>
        this.processRepository.createByKey(
          processId,
          findPath(PROCESS, 'activities'),
          activityDto,
        ),
      );

      // Update existing activities
      const updatePromises = activitiesToUpdate.map((activityDto) =>
        this.updateActivity(processId, activityDto._id, activityDto),
      );

      const createResults = await Promise.all(createPromises);
      const updateResults = await Promise.all(updatePromises);

      const allInsertionsSuccessful = createResults.every(
        (data, index) => data._id === activitiesToCreate[index]._id,
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
