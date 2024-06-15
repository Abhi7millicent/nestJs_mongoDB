import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { WorkflowsService } from './workflow.service';
import { UpsertWorkflowsDto } from './dto/workflows.dto';
import { ResponseHandler } from 'src/core/decorator/response-handler.decorator';
import { ProcessArchiveService } from 'src/app/modules/archive/process-archive/process-archive.service';

@Controller('v1/process')
export class WorkflowsController {
  constructor(
    private readonly workflowsService: WorkflowsService,
    private readonly processArchiveService: ProcessArchiveService,
  ) {}

  @Post('work-flows')
  @ResponseHandler()
  @HttpCode(HttpStatus.CREATED)
  async addWorkflows(@Body() createWorkflowsDto: UpsertWorkflowsDto) {
    try {
      const data = await this.workflowsService.upsert(createWorkflowsDto);
      return {
        statusCode: HttpStatus.CREATED,
        success: true,
        message: 'work-flows created successfully',
        data: data,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to create the work-flows',
        );
      }
    }
  }

  // @Put(':processId/workflows/:workflowId')
  // async updateWorkflow(
  //   @Param('processId') processId: string,
  //   @Param('workflowId') workflowId: string,
  //   @Body() workflowData: any,
  // ): Promise<any> {
  //   return this.workflowsService.updateWorkflow(
  //     processId,
  //     workflowId,
  //     workflowData,
  //   );
  // }

  @Put(':processId/workflows-delete/:workflowId')
  @ResponseHandler()
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('workflowId') workflowId: string,
  ) {
    try {
      const archiveData =
        await this.workflowsService.getByProcessById(processId);

      const result = await this.workflowsService.updateWorkflowsIsDeleted(
        processId,
        workflowId,
      );
      if (result) {
        const data = await this.processArchiveService.create(archiveData);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'workflows deleted successfully',
        data: result,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException(
          'Failed to delete the workflows',
        );
      }
    }
  }

  // @Put(':processId/workflows-soft-delete/:workflowId')
  // async updateWorkflowsIsSoftDeleted(
  //   @Param('processId') processId: string,
  //   @Param('workflowId') workflowId: string,
  // ) {
  //   return this.workflowsService.updateWorkflowsIsSoftDeleted(
  //     processId,
  //     workflowId,
  //   );
  // }
}
