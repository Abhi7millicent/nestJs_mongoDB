import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ComplianceScenariosDataService } from './compliance-scenarios-data.service';
import {
  ComplianceScenarioDataDto,
  UpsertComplianceScenarioDataDto,
} from './dto/compliance-scenarios-data.dto';

@Controller('v1/process')
export class ComplianceScenariosDataController {
  constructor(
    private readonly complianceScenariosDataService: ComplianceScenariosDataService,
  ) {}

  @Post('compliance-scenario-data')
  async addComplianceScenariosData(
    @Body() createComplianceScenarioDataDto: UpsertComplianceScenarioDataDto,
  ) {
    return this.complianceScenariosDataService.upsertComplianceScenariosData(
      createComplianceScenarioDataDto,
    );
  }

  @Put(':processId/compliance-scenario-data/:complianceScenarioDataId')
  async updateComplianceScenariosData(
    @Param('processId') processId: string,
    @Param('complianceScenarioDataId') complianceScenarioDataId: string,
    @Body() complianceScenarioDataDto: any,
  ): Promise<any> {
    return this.complianceScenariosDataService.updateComplianceScenariosData(
      processId,
      complianceScenarioDataId,
      complianceScenarioDataDto,
    );
  }

  @Put(':processId/compliance-scenario-data-delete/:complianceScenarioDataId')
  async updateComplianceScenariosDataIsDeleted(
    @Param('processId') processId: string,
    @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  ) {
    return this.complianceScenariosDataService.updateComplianceScenariosDataIsDeleted(
      processId,
      complianceScenarioDataId,
    );
  }

  @Put(
    ':processId/compliance-scenario-data-soft-delete/:complianceScenarioDataId',
  )
  async updateComplianceScenariosDataIsSoftDeleted(
    @Param('processId') processId: string,
    @Param('complianceScenarioDataId') complianceScenarioDataId: string,
  ) {
    return this.complianceScenariosDataService.updateComplianceScenariosDataIsSoftDeleted(
      processId,
      complianceScenarioDataId,
    );
  }
}
