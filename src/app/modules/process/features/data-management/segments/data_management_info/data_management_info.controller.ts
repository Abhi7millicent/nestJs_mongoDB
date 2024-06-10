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
import { DataManagementService } from './data_management_info.service';
import { DataManagementDto } from './dto/data_management_info.dto';

@Controller('api/process')
export class IntegrationScenarioController {
  constructor(private readonly dataManagementService: DataManagementService) {}

  @Put(':processId/integration-scenario/:dataManagementId')
  async updateIntegrationScenario(
    @Param('processId') processId: string,
    @Param('dataManagementId') dataManagementId: string,
    @Body() dataManagementDto: DataManagementDto,
  ): Promise<any> {
    return this.dataManagementService.update(
      processId,
      dataManagementId,
      dataManagementDto,
    );
  }
}
