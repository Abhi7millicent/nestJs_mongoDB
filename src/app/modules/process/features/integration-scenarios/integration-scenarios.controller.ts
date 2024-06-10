import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IntegrationScenarioService } from './integration-scenarios.service';
import { UpdateIntegrationScenarioDto } from './dto/integration-scenarios.dto';

@Controller('api/process')
export class IntegrationScenarioController {
  constructor(
    private readonly integrationScenarioService: IntegrationScenarioService,
  ) {}

  @Put(':processId/integration-scenario/:integrationScenarioId')
  async updateIntegrationScenario(
    @Param('processId') processId: string,
    @Param('integrationScenarioId') integrationScenarioId: string,
    @Body() updateIntegrationScenarioDto: UpdateIntegrationScenarioDto,
  ): Promise<any> {
    return this.integrationScenarioService.update(
      processId,
      integrationScenarioId,
      updateIntegrationScenarioDto,
    );
  }
}
