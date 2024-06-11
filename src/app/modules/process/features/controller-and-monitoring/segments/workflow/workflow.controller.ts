import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WorkflowsService } from './workflow.service';
import { UpsertWorkflowsDto } from './dto/workflows.dto';

@Controller('api/process')
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Post('work-flows')
  async addWorkflows(@Body() createWorkflowsDto: UpsertWorkflowsDto) {
    return this.workflowsService.Upsert(createWorkflowsDto);
  }

  @Put(':processId/workflows/:workflowId')
  async updateWorkflow(
    @Param('processId') processId: string,
    @Param('workflowId') workflowId: string,
    @Body() workflowData: any,
  ): Promise<any> {
    return this.workflowsService.updateWorkflow(
      processId,
      workflowId,
      workflowData,
    );
  }

  @Put(':processId/workflows-delete/:workflowId')
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('workflowId') workflowId: string,
  ) {
    return this.workflowsService.updateWorkflowsIsDeleted(
      processId,
      workflowId,
    );
  }

  @Put(':processId/workflows-soft-delete/:workflowId')
  async updateWorkflowsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('workflowId') workflowId: string,
  ) {
    return this.workflowsService.updateWorkflowsIsSoftDeleted(
      processId,
      workflowId,
    );
  }
}
