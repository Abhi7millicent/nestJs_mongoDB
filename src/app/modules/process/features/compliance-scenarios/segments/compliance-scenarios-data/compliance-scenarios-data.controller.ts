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
import { ComplianceScenarioDataDto } from './dto/compliance-scenarios-data.dto';

@Controller('api/process')
export class ComplianceScenariosDataController {
  constructor(
    private readonly complianceScenariosDataService: ComplianceScenariosDataService,
  ) {}

  @Post('compliance-scenario-data/:id')
  async addComplianceScenariosData(
    @Param('id') id: string,
    @Body() complianceScenarioDataDto: ComplianceScenarioDataDto,
  ) {
    return this.complianceScenariosDataService.addComplianceScenariosData(
      id,
      complianceScenarioDataDto,
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
