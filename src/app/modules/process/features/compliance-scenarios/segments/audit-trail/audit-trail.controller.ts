import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AuditTrailScenariosService } from './audit-trail.service';
import { UpsertAuditTrailScenariosDto } from './dto/audit-trail.dto';

@Controller('v1/process')
export class AuditTrailScenariosController {
  constructor(
    private readonly auditTrailScenariosService: AuditTrailScenariosService,
  ) {}

  @Post('audit-trail-scenarios')
  async upsertAuditTrailScenarios(
    @Body() createAuditTrailScenariosDto: UpsertAuditTrailScenariosDto,
  ) {
    return this.auditTrailScenariosService.upsertAuditTrailScenarios(
      createAuditTrailScenariosDto,
    );
  }

  @Put(':processId/audit-trail-scenarios/:auditTrailScenariosId')
  async updateWorkflow(
    @Param('processId') processId: string,
    @Param('auditTrailScenariosId') auditTrailScenariosId: string,
    @Body() auditTrailScenariosDto: any,
  ): Promise<any> {
    return this.auditTrailScenariosService.updateAuditTrailScenarios(
      processId,
      auditTrailScenariosId,
      auditTrailScenariosDto,
    );
  }

  @Put(':processId/audit-trail-scenarios-delete/:auditTrailScenariosId')
  async updateWorkflowsIsDeleted(
    @Param('processId') processId: string,
    @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  ) {
    return this.auditTrailScenariosService.updateAuditTrailScenariosIsDeleted(
      processId,
      auditTrailScenariosId,
    );
  }

  @Put(':processId/audit-trail-scenarios-soft-delete/:auditTrailScenariosId')
  async updateWorkflowsIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('auditTrailScenariosId') auditTrailScenariosId: string,
  ) {
    return this.auditTrailScenariosService.updateAuditTrailScenariosIsSoftDeleted(
      processId,
      auditTrailScenariosId,
    );
  }
}
